export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else {
      numerator / denominator;
    }
  } catch (error) {
    console.log(error);
  }
  return numerator / denominator;
}
