export const availability = {
  work: {
    open: true,
  },
  projects: {
    open: true,
  },
  updatedAt: "07/04/2026",
};

export const availabilityLabel = (() => {
  if (availability.work.open && availability.projects.open) {
    return "Available for work and projects";
  }

  if (availability.work.open) {
    return "Available for work";
  }

  if (availability.projects.open) {
    return "Available for projects";
  }

  return "Currently unavailable";
})();
