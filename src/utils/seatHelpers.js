const SEAT_RULES = {
  Bus: {
    Business: 30,
    Normal: 45,
  },

  Van: 12,
  FullCar: 4,
};

export  const isSeatCountValid = (seats, serviceType, busClass = "") => {
    console.log(seats,serviceType,busClass);
    
  if (!Number.isInteger(seats) || seats <= 0) {
    return false;
  }

  if (!SEAT_RULES[serviceType]) return false;

  if (serviceType === "Bus") {
    return busClass && seats <= SEAT_RULES.Bus[busClass];
  }

  return seats <= SEAT_RULES[serviceType];
};


