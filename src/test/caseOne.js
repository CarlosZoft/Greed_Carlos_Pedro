const Graph = require('./graph');

var g = new Graph(5);
    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);
    g.addVertex(4);


    g.addEdge(2, 4);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(2, 1);
    g.addEdge(4, 1);
    g.addEdge(1, 3);
    g.addEdge(3, 0);
 
    g.AproximateVertexCover();