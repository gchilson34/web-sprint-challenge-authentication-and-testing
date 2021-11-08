exports.seed = function(knex) {
    return knex('users').truncate()
      .then(function () {
        return knex('users').insert([
          {username:'HarryP', password:'TheChosen1'},
          {username:'RonW', password:'gingerKid5'},
          {username:'HermoineG', password:'IamaWitch!'},
          {username:'NevilleL', password:'Trevor01'}
        ]);
      });
  };