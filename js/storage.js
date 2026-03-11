// storage.js — Gestionnaire de données local (localStorage)
const Storage = {
  KEY: 'tssr_devops_data',

  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : this.default();
    } catch { return this.default(); }
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); }
    catch(e) { console.error('Erreur sauvegarde:', e); }
  },

  default() {
    return {
      exams: [],
      checklist: {},
      lastUpdated: null
    };
  },

  // Sauvegarder un résultat d'examen
  saveExam(result) {
    const data = this.get();
    data.exams.unshift({
      date: new Date().toLocaleDateString('fr-FR'),
      timestamp: Date.now(),
      score: result.score,
      correct: result.correct,
      wrong: result.wrong,
      skipped: result.skipped,
      total: result.total,
      modules: result.modules || {}
    });
    // Garder seulement les 50 derniers
    if (data.exams.length > 50) data.exams = data.exams.slice(0, 50);
    data.lastUpdated = Date.now();
    this.save(data);
  },

  // Sauvegarder l'état d'une checklist
  saveChecklist(items) {
    const data = this.get();
    data.checklist = items;
    data.lastUpdated = Date.now();
    this.save(data);
  },

  // Calculer les stats par module
  getModuleStats() {
    const data = this.get();
    const stats = {};
    data.exams.forEach(exam => {
      if (exam.modules) {
        Object.entries(exam.modules).forEach(([mod, score]) => {
          if (!stats[mod]) stats[mod] = [];
          stats[mod].push(score);
        });
      }
    });
    const result = {};
    Object.entries(stats).forEach(([mod, scores]) => {
      result[mod] = {
        avg: Math.round(scores.reduce((a,b)=>a+b,0)/scores.length),
        count: scores.length,
        best: Math.max(...scores),
        worst: Math.min(...scores)
      };
    });
    return result;
  },

  reset() {
    localStorage.removeItem(this.KEY);
  }
};
