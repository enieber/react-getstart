var React = require('react');

class Peaple extends React.Component {
  render(){
   let { name, day, status } = this.props;
   return (
     <div className="peaple-box">
       <h2>{name}</h2>
       <h4>Dia: {day}</h4>
       <h4>{status}</h4>
      </div>
    )
 }
}

module.exports = Peaple;
