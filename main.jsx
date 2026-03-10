import { useState, useRef, useEffect } from "react";
import { searchCatalog } from "../data/catalog.js";
import { AcThumb } from "./CardImage.jsx";

export function AddCardModal({ onAdd, onClose }) {
  const [query,    setQuery]    = useState("");
  const [acList,   setAcList]   = useState([]);
  const [selected, setSelected] = useState(null);
  const [price,    setPrice]    = useState("");
  const acRef = useRef(null);

  // Close autocomplete when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (acRef.current && !acRef.current.contains(e.target)) setAcList([]);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleQuery = (value) => {
    setQuery(value);
    setSelected(null);
    setAcList(value.trim().length >= 2 ? searchCatalog(value) : []);
  };

  const selectCard = (card) => {
    setSelected(card);
    setQuery(card.displayName);
    setAcList([]);
  };

  const handleAdd = () => {
    if (!selected || !price) return;
    onAdd({
      uid:      Date.now().toString(),
      card_id:  selected.id,
      name:     selected.displayName,
      setCode:  selected.s,
      type:     selected.t,
      imageUrl: selected.imageUrl,
      price:    parseFloat(price).toFixed(2),
    });
  };

  const closeAndReset = () => {
    setQuery(""); setSelected(null); setPrice(""); setAcList([]);
    onClose();
  };

  return (
    <div
      className="backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) closeAndReset(); }}
    >
      <div className="modal">
        <div className="modal-title">✦ Agregar Carta</div>

        {/* ── Search field with autocomplete ── */}
        <div className="field-group">
          <label className="field-label">Buscar carta</label>
          <div className="ac-wrap" ref={acRef}>
            <input
              className="field-input"
              placeholder="Ej: Vader, Luke, Anakin, Ahsoka..."
              value={query}
              onChange={(e) => handleQuery(e.target.value)}
              autoFocus
            />
            {query.length >= 2 && (
              <div className="ac-list">
                {acList.length === 0 ? (
                  <div className="ac-empty">Sin resultados para "{query}"</div>
                ) : (
                  acList.map((card, i) => (
                    <div key={i} className="ac-item" onClick={() => selectCard(card)}>
                      <AcThumb url={card.imageUrl} name={card.name} set={card.s} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="ac-name">{card.displayName}</div>
                        <div className="ac-sub">{card.setName} · {card.t}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Selected card preview ── */}
        {selected && (
          <div className="sel-preview">
            <div className="sel-thumb">
              <AcThumb url={selected.imageUrl} name={selected.name} set={selected.s} />
            </div>
            <div>
              <div className="sel-name">{selected.displayName}</div>
              <div className="sel-sub">{selected.setName} · {selected.t}</div>
              <div className="sel-id">ID: {selected.id}</div>
            </div>
          </div>
        )}

        {/* ── Price field ── */}
        <div className="field-group">
          <label className="field-label">Precio</label>
          <div className="price-wrap">
            <span className="price-symbol">$</span>
            <input
              className="field-input"
              type="number"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={!selected}
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-cancel"  onClick={closeAndReset}>Cancelar</button>
          <button
            className="btn-confirm"
            onClick={handleAdd}
            disabled={!selected || !price}
          >
            Agregar a carpeta
          </button>
        </div>
      </div>
    </div>
  );
}
