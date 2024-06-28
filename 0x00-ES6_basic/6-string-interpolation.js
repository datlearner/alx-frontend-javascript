export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${this.year}, it was the seventh-highest income country in the united states, with a per capita personal income of $${this.budget.income}. As of 2015, San Francisco proper had a GDP of $${this.budget.gdp}, and a GDP per capita of $${this.budget.capita}.`;
}
