import React from 'react';

class FormEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
   }
   submitForm(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
     const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
     fetch(url, config)
  .then(res => res.json())
   .then(res => {
     if (res.error) {
       alert(res.error);
     } else {
       alert(`Employé ajouté avec l'ID ${res}!`);
     }
   }).catch(e => {
     console.error(e);
     alert('Erreur lors de l\'ajout d\'un employé');
   });
   }
   render() {
     return (
      <div className="FormEmployee">
      <h1>Saisi d'un employé</h1>
     
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="lastname">Name of film</label>
            <input
              type="text"
              id="lastname"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
     
          <div className="form-data">
            <label htmlFor="firstname">url_poster</label>
            <input
              type="text"
              id="firstname"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>
     
          <div className="form-data">
            <label htmlFor="email">Commentaire</label>
            <input
              type="email"
              id="email"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <button type="submit" value="Envoyer"> envoyer </button>
          </div>
        </fieldset>
      </form>
     </div>
     )
   }
}

export default FormEmployee