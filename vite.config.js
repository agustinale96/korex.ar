/* ─── Reset & Base ─────────────────────────────────────────────────────────── */
*  { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #080c14;
  color: #e0eaf5;
  font-family: 'Exo 2', sans-serif;
  min-height: 100vh;
}

/* ─── App Root ──────────────────────────────────────────────────────────────── */
.root {
  min-height: 100vh;
  background: #080c14;
  background-image:
    radial-gradient(ellipse at 20% 0%,   rgba(0, 180, 255, .06), transparent 60%),
    radial-gradient(ellipse at 80% 100%, rgba(200, 0, 255, .04),  transparent 60%);
}

/* ─── Decorative ────────────────────────────────────────────────────────────── */
.scanline {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0, 180, 255, .5), transparent);
  pointer-events: none;
  animation: scan 8s linear infinite;
  opacity: .4;
  z-index: 999;
}

.corner-tl, .corner-tr {
  position: fixed;
  width: 40px; height: 40px;
  pointer-events: none;
  opacity: .5;
  z-index: 50;
}
.corner-tl { top: 0; left: 0;  border-top: 2px solid #00b4ff; border-left:  2px solid #00b4ff; }
.corner-tr { top: 0; right: 0; border-top: 2px solid #00b4ff; border-right: 2px solid #00b4ff; }

/* ─── Header ────────────────────────────────────────────────────────────────── */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  background: rgba(8, 12, 20, .95);
  border-bottom: 1px solid rgba(0, 180, 255, .18);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 6px;
  color: #00b4ff;
  text-shadow: 0 0 20px rgba(0, 180, 255, .6);
  text-transform: uppercase;
}
.logo span { color: #c800ff; text-shadow: 0 0 20px rgba(200, 0, 255, .6); }

.header-right {
  display: flex;
  align-items: center;
  gap: .8rem;
  flex-wrap: wrap;
}

.user-badge {
  font-size: .82rem;
  color: #7aa8c4;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .45rem 1rem;
  background: linear-gradient(135deg, rgba(0, 180, 255, .15), rgba(200, 0, 255, .15));
  border: 1px solid rgba(0, 180, 255, .5);
  border-radius: 6px;
  color: #00b4ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all .2s;
  text-transform: uppercase;
}
.share-btn:hover {
  background: linear-gradient(135deg, rgba(0, 180, 255, .28), rgba(200, 0, 255, .22));
  border-color: rgba(0, 180, 255, .9);
  box-shadow: 0 0 16px rgba(0, 180, 255, .3);
  color: #40cfff;
}

.viewer-badge {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .35rem .9rem;
  background: rgba(200, 0, 255, .1);
  border: 1px solid rgba(200, 0, 255, .3);
  border-radius: 20px;
  color: #c800ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.viewer-badge .dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #c800ff;
  animation: pulse 2s infinite;
}

/* ─── Main Layout ───────────────────────────────────────────────────────────── */
.main { max-width: 1400px; margin: 0 auto; padding: 2rem; }

.topbar {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-wrap   { position: relative; flex: 1; min-width: 200px; }
.search-icon   { position: absolute; left: .85rem; top: 50%; transform: translateY(-50%); color: #3d6a88; pointer-events: none; }
.search-input  {
  width: 100%;
  padding: .7rem 1rem .7rem 2.8rem;
  background: rgba(13, 22, 38, .9);
  border: 1px solid rgba(0, 180, 255, .2);
  border-radius: 8px;
  color: #c8dff0;
  font-family: 'Exo 2', sans-serif;
  font-size: .95rem;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.search-input:focus          { border-color: rgba(0, 180, 255, .6); box-shadow: 0 0 12px rgba(0, 180, 255, .15); }
.search-input::placeholder   { color: #3d5a72; }

.add-btn {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .7rem 1.4rem;
  background: linear-gradient(135deg, #00b4ff22, #00b4ff11);
  border: 1px solid rgba(0, 180, 255, .4);
  border-radius: 8px;
  color: #00b4ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all .2s;
  white-space: nowrap;
  text-transform: uppercase;
}
.add-btn:hover {
  background: linear-gradient(135deg, #00b4ff33, #00b4ff18);
  border-color: rgba(0, 180, 255, .8);
  box-shadow: 0 0 16px rgba(0, 180, 255, .2);
}

/* ─── Stats Bar ─────────────────────────────────────────────────────────────── */
.stats-bar {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: .8rem 1.2rem;
  background: rgba(13, 22, 38, .6);
  border: 1px solid rgba(0, 180, 255, .1);
  border-radius: 8px;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-family: 'Rajdhani', sans-serif;
  font-size: .9rem;
  letter-spacing: 1px;
  color: #4d7a9a;
  text-transform: uppercase;
}
.stat-value { color: #00b4ff; font-weight: 700; font-size: 1rem; }

/* ─── Card Grid ─────────────────────────────────────────────────────────────── */
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)); gap: 1.2rem; }

.tile {
  position: relative;
  background: rgba(13, 22, 38, .85);
  border: 1px solid rgba(0, 180, 255, .12);
  border-radius: 12px;
  overflow: hidden;
  transition: all .25s;
  cursor: default;
}
.tile:hover {
  border-color: rgba(0, 180, 255, .5);
  box-shadow: 0 0 24px rgba(0, 180, 255, .15), 0 8px 32px rgba(0, 0, 0, .4);
  transform: translateY(-4px) scale(1.01);
}

.img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: .72;
  overflow: hidden;
  background: #0d1626;
}
.card-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s;
}
.tile:hover .card-img { transform: scale(1.05); }

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(8, 12, 20, .95) 100%);
  opacity: 0;
  transition: opacity .25s;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: .8rem;
  gap: .5rem;
}
.tile:hover .overlay { opacity: 1; }

.action-btn {
  padding: .4rem .8rem;
  border-radius: 5px;
  font-family: 'Rajdhani', sans-serif;
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .15s;
  border: 1px solid;
}
.edit-btn   { background: rgba(0, 180, 255, .15); border-color: rgba(0, 180, 255, .5); color: #00b4ff; }
.edit-btn:hover { background: rgba(0, 180, 255, .3); }
.delete-btn { background: rgba(255, 50, 80, .12);  border-color: rgba(255, 50, 80, .4);  color: #ff4055; }
.delete-btn:hover { background: rgba(255, 50, 80, .25); }

.card-info { padding: .6rem .7rem .7rem; }
.card-name {
  font-family: 'Rajdhani', sans-serif;
  font-size: .88rem;
  font-weight: 600;
  color: #b8d4e8;
  line-height: 1.3;
  margin-bottom: .4rem;
}
.price-badge {
  display: inline-flex;
  align-items: center;
  padding: .2rem .55rem;
  background: linear-gradient(135deg, rgba(0, 180, 255, .18), rgba(0, 100, 200, .12));
  border: 1px solid rgba(0, 180, 255, .35);
  border-radius: 4px;
  color: #40cfff;
  font-family: 'Rajdhani', sans-serif;
  font-size: .85rem;
  font-weight: 700;
}
.set-badge {
  display: inline-flex;
  align-items: center;
  padding: .15rem .4rem;
  background: rgba(255, 255, 255, .05);
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 3px;
  color: #4d7a9a;
  font-family: 'Rajdhani', sans-serif;
  font-size: .7rem;
  letter-spacing: 1px;
  margin-left: .3rem;
}

/* ─── Empty State ───────────────────────────────────────────────────────────── */
.empty { grid-column: 1 / -1; text-align: center; padding: 5rem 2rem; }
.empty-icon  { font-size: 3rem; margin-bottom: 1rem; opacity: .4; }
.empty-title { font-family: 'Rajdhani', sans-serif; font-size: 1.3rem; letter-spacing: 2px; color: #3d6a88; text-transform: uppercase; margin-bottom: .5rem; }
.empty-sub   { font-size: .9rem; color: #2d4a60; }

/* ─── Modal / Backdrop ──────────────────────────────────────────────────────── */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 8, 16, .88);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal {
  background: linear-gradient(145deg, #0d1626, #0a1220);
  border: 1px solid rgba(0, 180, 255, .25);
  border-radius: 14px;
  padding: 1.8rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 0 60px rgba(0, 0, 0, .6);
}
.modal-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #00b4ff;
  margin-bottom: 1.5rem;
  padding-bottom: .8rem;
  border-bottom: 1px solid rgba(0, 180, 255, .15);
}

/* ─── Form Fields ───────────────────────────────────────────────────────────── */
.field-group  { margin-bottom: 1.2rem; }
.field-label  {
  display: block;
  font-family: 'Rajdhani', sans-serif;
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4d7a9a;
  margin-bottom: .4rem;
}
.field-input {
  width: 100%;
  padding: .7rem 1rem;
  background: rgba(8, 14, 24, .9);
  border: 1px solid rgba(0, 180, 255, .2);
  border-radius: 7px;
  color: #c8dff0;
  font-family: 'Exo 2', sans-serif;
  font-size: .95rem;
  outline: none;
  transition: border-color .2s;
}
.field-input:focus       { border-color: rgba(0, 180, 255, .55); box-shadow: 0 0 12px rgba(0, 180, 255, .12); }
.field-input::placeholder{ color: #2d4a60; }
.field-input:disabled    { opacity: .4; cursor: not-allowed; }

/* Price input with $ symbol */
.price-wrap        { position: relative; }
.price-symbol      { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #00b4ff; font-family: 'Rajdhani', sans-serif; font-weight: 700; pointer-events: none; }
.price-wrap .field-input { padding-left: 1.8rem; }

/* ─── Autocomplete ──────────────────────────────────────────────────────────── */
.ac-wrap { position: relative; }
.ac-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0; right: 0;
  background: #0a1220;
  border: 1px solid rgba(0, 180, 255, .25);
  border-radius: 8px;
  z-index: 300;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, .6);
  max-height: 320px;
  overflow-y: auto;
}
.ac-item {
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .6rem .9rem;
  cursor: pointer;
  transition: background .15s;
  border-bottom: 1px solid rgba(0, 180, 255, .06);
}
.ac-item:last-child { border-bottom: none; }
.ac-item:hover      { background: rgba(0, 180, 255, .1); }
.ac-name { font-family: 'Rajdhani', sans-serif; font-size: .92rem; font-weight: 600; color: #c8dff0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ac-sub  { font-size: .72rem; color: #3d6a88; margin-top: 2px; }
.ac-empty{ padding: .9rem 1rem; text-align: center; color: #3d6a88; font-size: .83rem; font-family: 'Rajdhani', sans-serif; letter-spacing: 1px; }

/* Selected card preview */
.sel-preview {
  display: flex;
  align-items: center;
  gap: .9rem;
  padding: .8rem;
  background: rgba(0, 180, 255, .06);
  border: 1px solid rgba(0, 180, 255, .2);
  border-radius: 8px;
  margin-bottom: 1rem;
}
.sel-thumb {
  width: 52px; height: 72px;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(0, 180, 255, .2);
  background: #0d1626;
}
.sel-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sel-name { font-family: 'Rajdhani', sans-serif; font-size: 1rem; font-weight: 600; color: #b8d4e8; }
.sel-sub  { font-size: .75rem; color: #4d7a9a; margin-top: 2px; }
.sel-id   { font-size: .68rem; color: #2d4060; margin-top: 3px; font-family: monospace; }

/* ─── Modal Actions ─────────────────────────────────────────────────────────── */
.modal-actions { display: flex; gap: .8rem; margin-top: 1.5rem; justify-content: flex-end; }

.btn-cancel {
  padding: .6rem 1.4rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: 7px;
  color: #4d7a9a;
  font-family: 'Rajdhani', sans-serif;
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
}
.btn-cancel:hover { border-color: rgba(255, 255, 255, .25); color: #7aa8c4; }

.btn-confirm {
  padding: .6rem 1.6rem;
  background: linear-gradient(135deg, rgba(0, 180, 255, .2), rgba(0, 100, 200, .2));
  border: 1px solid rgba(0, 180, 255, .55);
  border-radius: 7px;
  color: #00b4ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: .95rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .2s;
}
.btn-confirm:hover:not([disabled]) {
  background: linear-gradient(135deg, rgba(0, 180, 255, .35), rgba(0, 100, 200, .3));
  box-shadow: 0 0 16px rgba(0, 180, 255, .25);
  color: #50d4ff;
}
.btn-confirm[disabled] { opacity: .35; cursor: not-allowed; }

/* ─── Share Modal ───────────────────────────────────────────────────────────── */
.share-link-box {
  display: flex;
  align-items: center;
  gap: .6rem;
  padding: .8rem 1rem;
  background: rgba(8, 14, 24, .9);
  border: 1px solid rgba(0, 180, 255, .25);
  border-radius: 8px;
  margin: 1rem 0;
}
.share-link-text {
  flex: 1;
  font-family: 'Rajdhani', sans-serif;
  font-size: .95rem;
  color: #40cfff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.copy-btn {
  padding: .35rem .9rem;
  background: rgba(0, 180, 255, .15);
  border: 1px solid rgba(0, 180, 255, .4);
  border-radius: 5px;
  color: #00b4ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}
.copy-btn.copied { color: #00ff88; border-color: rgba(0, 255, 136, .4); background: rgba(0, 255, 136, .1); }
.share-note { font-size: .82rem; color: #3d5a72; line-height: 1.5; }

/* ─── Toast ─────────────────────────────────────────────────────────────────── */
.toast {
  position: fixed;
  bottom: 2rem; right: 2rem;
  padding: .8rem 1.4rem;
  background: rgba(10, 18, 32, .95);
  border: 1px solid rgba(0, 255, 136, .4);
  border-radius: 8px;
  color: #00ff88;
  font-family: 'Rajdhani', sans-serif;
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: 1px;
  z-index: 9999;
  box-shadow: 0 0 20px rgba(0, 255, 136, .15);
  animation: fade-in .3s ease, fade-out .4s 2.6s forwards;
}

/* ─── Scrollbar ─────────────────────────────────────────────────────────────── */
::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: #080c14; }
::-webkit-scrollbar-thumb { background: rgba(0, 180, 255, .2); border-radius: 3px; }

/* ─── Animations ────────────────────────────────────────────────────────────── */
@keyframes scan    { 0% { top: 0; }   100% { top: 100%; } }
@keyframes pulse   { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
@keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fade-out{ to   { opacity: 0; transform: translateY(10px); } }

/* ─── Responsive ────────────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .header    { padding: 0 1rem; }
  .main      { padding: 1rem; }
  .user-badge{ display: none; }
  .logo      { font-size: 1.4rem; letter-spacing: 3px; }
}
