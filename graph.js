var edges = new vis.DataSet([
    {
        from: 1,
        to: 2,
        arrows: {
            to: {
                enabled: true,
                scaleFactor: 1,  // 控制箭头大小的因子，1 为原始大小
                type: 'arrow'    // 箭头类型，可选值有 'arrow', 'bar', 'circle', 'box', 等
            }
        },
        color: {
            color: '#ff0000',  // 边的颜色
            highlight: '#ff0000',
            hover: '#ff0000',
            inherit: false,
            opacity: 1.0
        }
    }
]);

var container = document.getElementById('reviewNetwork');
var data = {
    nodes: new vis.DataSet([]), // 定义空的节点集合
    edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
