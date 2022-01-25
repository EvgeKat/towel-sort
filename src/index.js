
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) 
    { 
        let NewARR = []; 

        for (i = 0; i < matrix.length; i++) 
        {
            for (j = 0; j < matrix[i].length; j++) 
            {
              let columnIndex = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
               
                NewARR.push(matrix[i][columnIndex]);
               
            }
        }
       return NewARR;
    }

  else 
    {
      return [];
    }
}
