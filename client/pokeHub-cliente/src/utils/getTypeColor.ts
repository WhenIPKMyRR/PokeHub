
export const getColorByType = (type: string): string => {
  switch (type) {
    case 'normal':
      return '#b8b8b8';
    case 'fire':
      return '#F08030';
    case 'water':
      return '#6890F0';
    case 'electric':
      return '#F8D030';
    case 'grass':
      return '#78C850';
    case 'ice':
      return '#98D8D8';
    case 'fighting':
      return '#C03028';
    case 'poison':
      return '#A040A0';
    case 'ground':
      return '#E0C068';
    case 'flying':
      return '#A890F0';
    case 'psychic':
      return '#f1948acf';
    case 'bug':
      return '#A8B820';
    case 'rock':
      return '#B8A038';
    case 'ghost':
      return '#705898';
    case 'dragon':
      return '#7038f88f';
    case 'steel':
      return '#B8B8D0';
    case 'fairy':
      return '#EE99AC';
    case 'dark':
      return '#705848';
    default:
      return '#000000'; // Cor padrão para tipos desconhecidos
  }
};