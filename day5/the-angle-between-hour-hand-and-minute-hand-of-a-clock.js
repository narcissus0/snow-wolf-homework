/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  // your code here
  const [hours, mins] = time.split(":");

  const hoursAngle = (360 / 12) * (hours % 12);

  const minutesAngle = (360 / 60) * mins;

  //60min 时针走30度
  const surpassAngle = mins / 2;

  const angleBetween = Math.abs(hoursAngle + surpassAngle - minutesAngle);

  // 24h
  const result = angleBetween > 180 ? 360 - angleBetween : angleBetween;

  return Math.round(result);
}
