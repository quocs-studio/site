export default function parseInput(target) {
  if (target.type === 'checkbox') {
    return {
      [target.name]: target.checked,
    };
  }
  if (target.type === 'number') {
    return {
      [target.name]: target.step ? parseFloat(target.value) || 0 : parseInt(target.value, 10) || 0,
    };
  }
  return {
    [target.name]: target.value,
  };
}
