export const SET_NAMES = {
  SOR: "Spark of Rebellion",
  SHD: "Shadows of the Galaxy",
  TWI: "Twilight of the Republic",
  JTL: "Jump to Lightspeed",
  LOF: "Legends of the Force",
};

export const SET_COLORS = {
  SOR: "#c80000",
  SHD: "#8800cc",
  TWI: "#006acc",
  JTL: "#cc6600",
  LOF: "#008866",
};

const cardImg = (set, num) =>
  `https://cdn.swu-db.com/images/cards/${set}/${String(num).padStart(3, "0")}.png`;

const RAW_CATALOG = [
  // ── SOR ──────────────────────────────────────────────────────────────────
  { id: "SOR_001", s: "SOR", n: 1,   name: "Director Krennic",     sub: "Aspiring to Authority",          t: "Leader" },
  { id: "SOR_002", s: "SOR", n: 2,   name: "Iden Versio",          sub: "Inferno Squad Commander",        t: "Leader" },
  { id: "SOR_003", s: "SOR", n: 3,   name: "Chewbacca",            sub: "Walking Carpet",                 t: "Leader" },
  { id: "SOR_004", s: "SOR", n: 4,   name: "Chirrut Îmwe",         sub: "One With The Force",             t: "Leader" },
  { id: "SOR_005", s: "SOR", n: 5,   name: "Luke Skywalker",       sub: "Faithful Friend",                t: "Leader" },
  { id: "SOR_006", s: "SOR", n: 6,   name: "Emperor Palpatine",    sub: "Galactic Ruler",                 t: "Leader" },
  { id: "SOR_007", s: "SOR", n: 7,   name: "Grand Moff Tarkin",    sub: "Oversector Governor",            t: "Leader" },
  { id: "SOR_008", s: "SOR", n: 8,   name: "Hera Syndulla",        sub: "Spectre Two",                    t: "Leader" },
  { id: "SOR_009", s: "SOR", n: 9,   name: "Leia Organa",          sub: "Alliance General",               t: "Leader" },
  { id: "SOR_010", s: "SOR", n: 10,  name: "Darth Vader",          sub: "Dark Lord of the Sith",          t: "Leader" },
  { id: "SOR_011", s: "SOR", n: 11,  name: "Grand Inquisitor",     sub: "Hunting the Jedi",               t: "Leader" },
  { id: "SOR_012", s: "SOR", n: 12,  name: "IG-88",                sub: "Ruthless Bounty Hunter",         t: "Leader" },
  { id: "SOR_013", s: "SOR", n: 13,  name: "Cassian Andor",        sub: "Dedicated to the Rebellion",     t: "Leader" },
  { id: "SOR_014", s: "SOR", n: 14,  name: "Sabine Wren",          sub: "Galvanized Revolutionary",       t: "Leader" },
  { id: "SOR_015", s: "SOR", n: 15,  name: "Boba Fett",            sub: "Collecting the Bounty",          t: "Leader" },
  { id: "SOR_016", s: "SOR", n: 16,  name: "Grand Admiral Thrawn", sub: "Patient and Insightful",         t: "Leader" },
  { id: "SOR_017", s: "SOR", n: 17,  name: "Han Solo",             sub: "Audacious Smuggler",             t: "Leader" },
  { id: "SOR_018", s: "SOR", n: 18,  name: "Jyn Erso",             sub: "Resisting Oppression",           t: "Leader" },
  { id: "SOR_049", s: "SOR", n: 49,  name: "Luke Skywalker",       sub: "Jedi Knight",                    t: "Unit" },
  { id: "SOR_050", s: "SOR", n: 50,  name: "Leia Organa",          sub: "Defiant Princess",               t: "Unit" },
  { id: "SOR_051", s: "SOR", n: 51,  name: "Han Solo",             sub: "Reluctant Hero",                 t: "Unit" },
  { id: "SOR_052", s: "SOR", n: 52,  name: "Chewbacca",            sub: "Loyal Companion",                t: "Unit" },
  { id: "SOR_053", s: "SOR", n: 53,  name: "R2-D2",                sub: "Ignoring Protocol",              t: "Unit" },
  { id: "SOR_054", s: "SOR", n: 54,  name: "C-3PO",                sub: "Protocol Droid",                 t: "Unit" },
  { id: "SOR_055", s: "SOR", n: 55,  name: "Obi-Wan Kenobi",       sub: "Following Fate",                 t: "Unit" },
  { id: "SOR_056", s: "SOR", n: 56,  name: "Yoda",                 sub: "Old Master",                     t: "Unit" },
  { id: "SOR_083", s: "SOR", n: 83,  name: "Darth Vader",          sub: "Commanding the First Legion",    t: "Unit" },
  { id: "SOR_084", s: "SOR", n: 84,  name: "Emperor Palpatine",    sub: "Master of the Dark Side",        t: "Unit" },
  { id: "SOR_085", s: "SOR", n: 85,  name: "Boba Fett",            sub: "Notorious Bounty Hunter",        t: "Unit" },
  { id: "SOR_086", s: "SOR", n: 86,  name: "Stormtrooper",         sub: null,                             t: "Unit" },
  { id: "SOR_102", s: "SOR", n: 102, name: "Millennium Falcon",    sub: "Piece of Junk",                  t: "Unit" },
  // ── SHD ──────────────────────────────────────────────────────────────────
  { id: "SHD_001", s: "SHD", n: 1,  name: "Ahsoka Tano",           sub: "Brash Maverick",                 t: "Leader" },
  { id: "SHD_002", s: "SHD", n: 2,  name: "Cal Kestis",            sub: "Hermit's Apprentice",            t: "Leader" },
  { id: "SHD_003", s: "SHD", n: 3,  name: "Ezra Bridger",          sub: "Resourceful Freedom Fighter",    t: "Leader" },
  { id: "SHD_007", s: "SHD", n: 7,  name: "Darth Maul",            sub: "Lethal Surprise",                t: "Leader" },
  { id: "SHD_009", s: "SHD", n: 9,  name: "Jabba the Hutt",        sub: "His High Exaltedness",           t: "Leader" },
  { id: "SHD_010", s: "SHD", n: 10, name: "Kylo Ren",              sub: "Tormented One",                  t: "Leader" },
  { id: "SHD_053", s: "SHD", n: 53, name: "Ahsoka Tano",           sub: "Fulcrum",                        t: "Unit" },
  { id: "SHD_079", s: "SHD", n: 79, name: "Darth Maul",            sub: "Fired by Hatred",                t: "Unit" },
  { id: "SHD_080", s: "SHD", n: 80, name: "Kylo Ren",              sub: "Rash and Deadly",                t: "Unit" },
  // ── TWI ──────────────────────────────────────────────────────────────────
  { id: "TWI_003", s: "TWI", n: 3,   name: "Obi-Wan Kenobi",       sub: "Patient Mentor",                 t: "Leader" },
  { id: "TWI_004", s: "TWI", n: 4,   name: "Yoda",                 sub: "Sensing Darkness",               t: "Leader" },
  { id: "TWI_005", s: "TWI", n: 5,   name: "Count Dooku",          sub: "Face of the Confederacy",        t: "Leader" },
  { id: "TWI_009", s: "TWI", n: 9,   name: "Maul",                 sub: "A Rival in Darkness",            t: "Leader" },
  { id: "TWI_010", s: "TWI", n: 10,  name: "Ahsoka Tano",          sub: "Snips",                          t: "Leader" },
  { id: "TWI_011", s: "TWI", n: 11,  name: "Anakin Skywalker",     sub: "What it Takes to Win",           t: "Leader" },
  { id: "TWI_012", s: "TWI", n: 12,  name: "Mace Windu",           sub: "Vapaad Form Master",             t: "Leader" },
  { id: "TWI_014", s: "TWI", n: 14,  name: "Chancellor Palpatine", sub: "Playing Both Sides",             t: "Leader" },
  { id: "TWI_143", s: "TWI", n: 143, name: "Anakin Skywalker",     sub: "Maverick Mentor",                t: "Unit" },
  { id: "TWI_147", s: "TWI", n: 147, name: "Yoda",                 sub: "Enduring Grand Master",          t: "Unit" },
  { id: "TWI_148", s: "TWI", n: 148, name: "General Grievous",     sub: "Daunting Cyborg",                t: "Unit" },
  { id: "TWI_151", s: "TWI", n: 151, name: "Padmé Amidala",        sub: "Resolute Senator",               t: "Unit" },
  // ── JTL ──────────────────────────────────────────────────────────────────
  { id: "JTL_001", s: "JTL", n: 1, name: "Wedge Antilles",         sub: "Red Leader",                     t: "Leader" },
  { id: "JTL_002", s: "JTL", n: 2, name: "Poe Dameron",            sub: "Most Daring Pilot",              t: "Leader" },
  { id: "JTL_004", s: "JTL", n: 4, name: "Luke Skywalker",         sub: "Red Five",                       t: "Leader" },
  { id: "JTL_009", s: "JTL", n: 9, name: "Darth Vader",            sub: "Terror to Behold",               t: "Leader" },
  // ── LOF ──────────────────────────────────────────────────────────────────
  { id: "LOF_001", s: "LOF", n: 1,  name: "Qui-Gon Jinn",          sub: "Following the Will of the Force", t: "Leader" },
  { id: "LOF_002", s: "LOF", n: 2,  name: "Rey",                   sub: "Unimaginable Power",             t: "Leader" },
  { id: "LOF_009", s: "LOF", n: 9,  name: "Darth Maul",            sub: "Shattered by Defeat",            t: "Leader" },
  { id: "LOF_070", s: "LOF", n: 70, name: "Anakin Skywalker",      sub: "Conflicted Apprentice",          t: "Unit" },
  { id: "LOF_071", s: "LOF", n: 71, name: "Obi-Wan Kenobi",        sub: "Destined to Fall",               t: "Unit" },
  { id: "LOF_073", s: "LOF", n: 73, name: "Rey",                   sub: "Seeking Answers",                t: "Unit" },
  { id: "LOF_074", s: "LOF", n: 74, name: "Darth Maul",            sub: "Apprentice of Darkness",         t: "Unit" },
];

export const CATALOG = RAW_CATALOG.map((c) => ({
  ...c,
  displayName: c.sub ? `${c.name} – ${c.sub}` : c.name,
  setName: SET_NAMES[c.s],
  imageUrl: cardImg(c.s, c.n),
}));

export function searchCatalog(query) {
  const t = query.toLowerCase().trim();
  return CATALOG.filter(
    (c) =>
      c.name.toLowerCase().includes(t) ||
      (c.sub && c.sub.toLowerCase().includes(t))
  ).slice(0, 12);
}
