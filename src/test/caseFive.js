const Graph = require('./graph');

var g = new Graph(4);
    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);


    g.addEdge(3, 0);
    g.addEdge(3, 2);
    g.addEdge(3, 1);
 
    g.AproximateVertexCover();