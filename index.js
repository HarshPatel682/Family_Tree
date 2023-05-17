//JavaScript
var family = new FamilyTree(document.getElementById('tree'), {
    mouseScrool: FamilyTree.action.none,
    scaleInitial: FamilyTree.match.boundary,
    mode: 'dark',
    
    nodeBinding: {
        field_0: "name",
        field_1: "birthDate",
        img_0: "photo"
    },

    //** to add the + icons to add people 
    nodeMenu: {
        edit: { text: 'Edit' },
        details: { text: 'Details' },
        json : {text: 'Json'},
    },
    nodeTreeMenu: true,

    //** uncomment this when uploading - so others cant mess with code
    // editForm: {readOnly: true},

});


family.load(
    [
        {"id":0,"pids":[1],"gender":"male","name":"Ambelal Patel","birthDate":"1867-09-16","deathDate":"1922-06-29","photo":"https://cdn.balkan.app/shared/m60/1.jpg","city":"Nizhniy Novgorod","country":"Russia"},
        {"id":1,"pids":[0],"gender":"female","name":"Shantaben Patel","birthDate":"1937-10-23","photo":"https://cdn.balkan.app/shared/w60/1.jpg","city":"Nizhniy Novgorod","country":"Russia"},
        {"id":2,"pids":[3],"gender":"male","name":"Bhoopeshkumar Patel","fid":0,"mid":1,"birthDate":"April 15, 1971","deathDate":"","photo":"","city":"Batesville, IN","country":"USA","address":"","phone":""},
        {"id":3,"pids":[2],"gender":"female","name":"Hinaben Patel","birthDate":"February 26, ??","deathDate":"","photo":"","city":"Batesville, IN","country":"USA","address":"","phone":""},
        {"id":4,"pids":[5],"gender":"male","name":"Harsh Patel","fid":3,"mid":2,"birthDate":"June 27, 1998","photo":"","address":"","city":"","phone":"","country":"USA","deathDate":""},
        {"id":5,"pids":[4],"gender":"female","name":"Reecha Patel","fid":21,"mid":22,"birthDate":"September 24, 1997","photo":"","address":"","city":"","phone":"","country":"USA","deathDate":""},
        {"id":19,"pids":[20],"gender":"male","name":"Yasha Nikitin","birthDate":"1893-06-05","photo":"https://cdn.balkan.app/shared/m60/4.jpg","city":"Shelekhov","country":"Russia"},
        {"id":20,"pids":[19],"gender":"female","name":"Polina Guseva","birthDate":"1891-09-19","photo":"https://cdn.balkan.app/shared/w60/4.jpg","city":"Shelekhov","country":"Russia"},
        {"id":21,"pids":[22],"gender":"male","name":"Rajendra Patel","fid":19,"mid":20,"birthDate":"??","photo":"","city":"Poconos, PA","country":"USA","deathDate":"","address":"","phone":""},
        {"id":22,"pids":[21],"gender":"female","name":"Vaishali Patel","birthDate":"??","photo":"","city":"","country":"USA","deathDate":"","address":"","phone":""},
            {"mid":"1","fid":0,"gender":"female","id":"_8ico","name":"Lila ba","birthDate":"??","photo":"","deathDate":"","city":"","country":"India","address":"","phone":"","pids":[]},
            {"mid":"1","fid":0,"gender":"female","id":"_xgyo","name":"Sarla Ba","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"2","fid":3,"gender":"female","id":"_8nm0","name":"Avni Patel","birthDate":"July 27, 1997","photo":"","deathDate":"","city":"","country":"USA","address":"","phone":"","pids":[]}
    ]       
);

// console.log(family.exportJSON())