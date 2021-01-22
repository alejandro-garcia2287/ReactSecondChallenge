const React = require("react");

export class PokeCard extends React.Component {
  render() {
    return (
      <div class="CardDiv">
        <h1 class="CardHeader">{this.props.pokemon.name}</h1>
        <hr />
        <img
          alt="front_default"
          src={this.props.pokemon.sprites.front_default}
        />
        <img alt="front_shiny" src={this.props.pokemon.sprites.front_shiny} />
        <hr />
        <a class="VideoLink" href={this.props.pokemon.video}>
          Youtube Video
        </a>
      </div>
    );
  }
}
