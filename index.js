var rect = {
	perimeter: (x,y) => (2*(x+y)) ,
	area: (x,y) => (x*y)
};

function solverectangle(l,b)  {
      
      console.log("Solving for perimeter and area with l = " + l + "and b = " + b);
      if( l <=0 || b <=0 )
      {
      	console.log("Length and breadth should be more than zero");
      }
      else
      {
      	console.log("Perimeter is " + rect.perimeter(l,b) );
      	console.log("Area is " + rect.area(l,b));
      }

	}

solverectangle(5,6);
solverectangle(0,9);


