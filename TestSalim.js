// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {
    if (ratings.length === 0){
        return 0;
    }
    
    let somme = 0; 
        for (let rating of ratings) {
            somme += rating; 
        }

    return somme / ratings.length;
  
  }
  
  // ======================
  
  const tauRatings = [5, 4, 5, 5, 1, 2];
  const colinRatings = [5, 5, 5, 4, 5];
  const claraRatings = [4, 3, 5, 4, 5];
  
  const tauAverage = calculateAverageRating(tauRatings);
  const colinAverage = calculateAverageRating(colinRatings);
  const claraAverage = calculateAverageRating(claraRatings);
  
  if (tauAverage && colinAverage) {
    document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' étoiles';
    document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' étoiles';
    document.querySelector('#clara-score').innerText = claraAverage.toFixed(1) + ' étoiles';
  }











  