class Graph {

    constructor(vertex) {
      this.vertex = vertex;
      this.listAdj = new Map(); 
      this.apVertex = []; // Priority users
    }
    // Get 
    getApVertex(){
      return this.apVertex;
    }
    getKeys() {
      return this.listAdj.keys();
    }
    getValues(i) {
      return this.listAdj.get(i);
    }
    // Adicionando Vertice;
    addVertex(v) {
      this.listAdj.set(v, []);
    }
    // Adicionando Arestas;
    addEdge(v, w) {
      this.listAdj.get(v).push(w);
      this.listAdj.get(w).push(v);
    }
    // Auxiliar 
    print() {
      var vertex = this.listAdj.keys();
      console.log('VERTEX -> LIST\n');
      for (var i of vertex) {
        var listAdj = this.listAdj.get(i);
        var sum = '';
        for (var j = 0; j < listAdj.length; ++j) {
          sum += listAdj[j];
          if (j != listAdj.length - 1) sum += ' && ';
        }
        console.log(i + ' -> ' + sum);
      }
    }
    // Aproximate Vertex Cover algorithm 
    AproximateVertexCover ()  {
      
        var size = this.vertex,
          visited = [size],
          vertex = this.listAdj.keys();
        
        //Iniciando todos como não visitados
        for (var i=0; i<size; ++i) visited[i] = false;
  
        
        //Para cada vertice do grafo
        for (var j of vertex) 
        {
            if (!visited[j])
            {

                var listAdj = this.listAdj.get(j);

                for (i = 0; i<listAdj.length; ++i)
                {
                    
                    var value = listAdj[i];

                      if (!visited[value])
                      {
                          visited[value] = true;
                          visited[j]  = true;
                          break;
                      }
                }
            }
        }
        for(var i = 0; i < size; ++i)
          if(visited[i]){
              this.apVertex.push(i);
              //console.log(i);
          }
            
    }
}
  