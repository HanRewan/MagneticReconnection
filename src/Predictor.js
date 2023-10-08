export function Predict({ year, month, day, hour }) {
    return 6;
}
  
export function Status({ index }) {
    console.log(index);
    if (index <= 3) return 'Safe';
    if (index <= 5) return 'Risky';
    return 'Danger';
}