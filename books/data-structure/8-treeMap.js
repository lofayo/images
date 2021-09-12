/*
 * @Author: fangyong luo
 * @Date: 2020-11-15 11:27:55
 * @Description: file content
 */

// 测试深层树的遍历，来看它到底是深度遍历，还是广度遍历
const tree = [
    {
        key:'1', 
        children: [
            {
                key: '1-1',
                children: []
            },
            {
                key: '1-2',
                children: []
            },
            {
                key: '1-3',
                children: []
            },
            {
                key: '1-4',
                children: []
            }
        ]
    },
    {
        key:'2', 
        children: [
            {
                key: '2-1',
                children: []
            },
            {
                key: '2-2',
                children: []
            },
            {
                key: '2-3',
                children: []
            },
            {
                key: '2-4',
                children: []
            }
        ]
    },
    {
        key:'3', 
        children: [
            {
                key: '3-1',
                children: []
            },
            {
                key: '3-2',
                children: []
            },
            {
                key: '3-3',
                children: []
            },
            {
                key: '3-4',
                children: []
            }
        ]
    },
    {
        key:'4', 
        children: [
            {
                key: '4-1',
                children: []
            },
            {
                key: '4-2',
                children: []
            },
            {
                key: '4-3',
                children: []
            },
            {
                key: '4-4',
                children: []
            }
        ]
    }
];

const loopTree = (tree) => {
    for(let item of tree) {
        const {key, children} = item;
        console.log(key);
        loopTree(children);
    }
}

// loopTree(tree);
// js即使是单线程，针对树的搜索也是深度优先的。其实它是每次要让代码从上到下依次执行完成才行

// 深度优先查找树节点
const findNodeByIdWithDeep = (() => {
    let isFinded = false;
    let target = null;
    return (tree, id) => {
        for(let item of tree) {
            if(isFinded) return;
            const {key, children} = item;
            console.log(key);
            if(key === id) {
                isFinded = true;
                target = item;
                return console.log(item);
            }
            findNodeByIdWithDeep(children, id);
        }
        if(isFinded) {
            return console.log(target);
        }
    }
})();

// 广度优先查找树节点
const findNodeByIdWithWidth = (tree, id) => {
    const childrens = [];
    for(let item of tree) {
        const {key, children} = item;
        console.log(key);
        if(key === id) return console.log(item);
        childrens.push(...children);
    }
    if(childrens.length) {
        return findNodeByIdWithWidth(childrens, id);
    } else {
        return console.log('not exists');
    }
}

findNodeByIdWithDeep(tree, '2-2');
console.log('----------------------------')
// findNodeByIdWithWidth(tree, '2-2');
