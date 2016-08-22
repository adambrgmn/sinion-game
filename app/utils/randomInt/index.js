function isInt(val) {
  return !isNaN(val) &&
    parseInt(Number(val), 10) === val &&
    !isNaN(parseInt(val, 10));
}

export default function randomInt(min, max) {
  if (!isInt(min) || !isInt(max)) {
    console.error(
      'randomInt: One if the provided arguments is not a valid number. It must be a integer'
    );

    return undefined;
  }

  const minimum = Math.ceil(Number(min));
  const maximum = Math.ceil(Number(max));

  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
