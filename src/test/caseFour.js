const Graph = require('./graph');

var g = new Graph(6);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);
    g.addVertex(4);
    g.addVertex(5);
    g.addVertex(6);
    


    g.addEdge(1, 2);
    g.addEdge(1, 5);
    g.addEdge(1, 6);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(5, 3);
    g.addEdge(6, 3);
    g.addEdge(4, 3);
    

 
    g.AproximateVertexCover();