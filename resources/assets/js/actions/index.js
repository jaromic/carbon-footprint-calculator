export const CALCULATE_EMISSIONS = 'calculate_emmissions';

export function calcEmissions(distance, fuelEconomy, unit='miles', rateUnit='mpg') {
  if (unit === 'miles' && rateUnit === 'mpg') {

    let emissionsPayload = {};

    let gallons = distance / fuelEconomy;

    let tons = gallons * 4.5;

    let grams = tons * 1000000;

    emissionsPayload.emissions = grams;
    emissionsPayload.distance = distance;
    emissionsPayload.unit = unit;

    return {
      type: CALCULATE_EMISSIONS,
      payload: emissionsPayload
    }
  }
}