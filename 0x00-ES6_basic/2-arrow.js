export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['Soma', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

