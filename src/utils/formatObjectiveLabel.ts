export default function formatObjective(objective: number): string {
  let label;
  if (objective === 1) label = 'Hipertrofia';
  if (objective === 2) label = 'Emagrecimento';
  if (objective === 3) label = 'Resistencia';
  return label;
}
