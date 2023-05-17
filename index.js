//JavaScript
var family = new FamilyTree(document.getElementById('tree'), {
    // mouseScrool: FamilyTree.action.none,
    showXScroll: FamilyTree.scroll.visible,
    showYScroll: FamilyTree.scroll.visible,
    mouseScrool: FamilyTree.action.zoom,
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
        {"id":0,"pids":[1],"gender":"male","name":"Ambelal Patel","birthDate":"1867-09-16","deathDate":"1922-06-29","photo":"","city":"Nizhniy Novgorod","country":"Russia"},
        {"id":1,"pids":[0],"gender":"female","name":"Shantaben Patel","birthDate":"1937-10-23","photo":"images/harsh/shantaba.jpg","city":"Nizhniy Novgorod","country":"Russia"},
        {"id":2,"pids":[3],"gender":"male","name":"Bhoopeshkumar Patel","fid":0,"mid":1,"birthDate":"April 15, 1971","deathDate":"","photo":"images/harsh/bhoopesh.jpg","city":"Batesville, IN","country":"USA","address":"","phone":""},
        {"id":3,"pids":[2],"gender":"female","name":"Hinaben Patel","birthDate":"February 26, ??","deathDate":"","photo":"images/harsh/hina.jpg","city":"Batesville, IN","country":"USA","address":"","phone":"","mid":"_rjkz","fid":"_q6do"},
        {"id":4,"pids":[5],"gender":"male","name":"Harsh Patel","fid":3,"mid":2,"birthDate":"June 27, 1998","photo":"images/harsh.jpg","address":"","city":"","phone":"","country":"USA","deathDate":""},
        {"id":5,"pids":[4],"gender":"female","name":"Reecha Patel","fid":21,"mid":22,"birthDate":"September 24, 1997","photo":"images/reecha.jpg","address":"","city":"","phone":"","country":"USA","deathDate":""},
        {"id":19,"pids":[20],"gender":"male","name":"Yasha Nikitin","birthDate":"1893-06-05","photo":"https://cdn.balkan.app/shared/m60/4.jpg","city":"Shelekhov","country":"Russia"},
        {"id":20,"pids":[19],"gender":"female","name":"Polina Guseva","birthDate":"1891-09-19","photo":"https://cdn.balkan.app/shared/w60/4.jpg","city":"Shelekhov","country":"Russia"},
        {"id":21,"pids":[22],"gender":"male","name":"Rajendra Patel","fid":19,"mid":20,"birthDate":"??","photo":"images/reecha/rajendra.jpg","city":"Poconos, PA","country":"USA","deathDate":"","address":"","phone":""},
        {"id":22,"pids":[21],"gender":"female","name":"Vaishali Patel","birthDate":"??","photo":"images/reecha/vsaishali.jpg","city":"","country":"USA","deathDate":"","address":"","phone":""},
            {"mid":"1","fid":0,"gender":"female","id":"_8ico","name":"Lila ba","birthDate":"??","photo":"","deathDate":"","city":"","country":"India","address":"","phone":"","pids":["_wpap"]},
            {"mid":"1","fid":0,"gender":"female","id":"_xgyo","name":"Sarla Ba","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"images/harsh/sarlaba.jpg","pids":["_6icu"]},
            {"mid":"2","fid":3,"gender":"female","id":"_8nm0","name":"Avni Patel","birthDate":"July 27, 1997","photo":"images/harsh/avni.jpg","deathDate":"","city":"","country":"USA","address":"","phone":"","pids":[]},
            {"gender":"female","id":"_rjkz","name":"?","birthDate":"","photo":"","deathDate":"2005","city":"","country":"","address":"","phone":"","pids":["_q6do"]},
            {"gender":"male","pids":["_rjkz"],"id":"_q6do","name":"?","birthDate":"","photo":"","deathDate":"2005","city":"","country":"","address":"","phone":""},
            {"mid":"_rjkz","fid":"_q6do","gender":"female","id":"_v46b","name":"Vasanti (Vasu) Patel","birthDate":"","photo":"images/harsh/vasu.jpg","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_zkzg"]},
            {"mid":"_rjkz","fid":"_q6do","gender":"female","id":"_f678","name":"Kusum","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_rjkz","fid":"_q6do","gender":"female","id":"_17sd","name":"Devi","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_rjkz","fid":"_q6do","gender":"female","id":"_8r4p","name":"Saku masi","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_rjkz","fid":"_q6do","gender":"male","id":"_dfsk","name":"Anil","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_rjkz","fid":"_q6do","gender":"male","id":"_fegh","name":"Bharat","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_rjkz","fid":"_q6do","gender":"male","id":"_x27b","name":"Zaher mama","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
        {"pids":["_v46b"],"gender":"male","id":"_zkzg","name":"Dhansukh (Praven) Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_zkzg","fid":"_v46b","gender":"female","id":"_r5cq","name":"Pinkiben","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_dx0i"]},
        {"pids":["_r5cq"],"gender":"male","id":"_dx0i","name":"Pankaj Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_v46b","fid":"_zkzg","gender":"female","id":"_1poy","name":"Chetu (Dipti)","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_i4em"]},
            {"mid":"_zkzg","fid":"_v46b","gender":"male","id":"_gqxa","name":"Hemant","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_utsf"]},
        {"pids":["_gqxa"],"gender":"female","id":"_utsf","name":"Darshnabhabi","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_dx0i","fid":"_r5cq","gender":"male","id":"_6wcc","name":"Kishan","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_dx0i","fid":"_r5cq","gender":"female","id":"_g0kx","name":"Bhumi","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
        {"pids":["_1poy"],"gender":"male","id":"_i4em","name":"Dinesh Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_i4em","fid":"_1poy","gender":"female","id":"_i8s5","name":"Tanvi","birthDate":"","photo":"images/harsh/tanvi.jpg","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_i4em","fid":"_1poy","gender":"female","id":"_y56w","name":"Asmita","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_q7t6"]},
        {"pids":["_y56w"],"gender":"male","id":"_q7t6","name":"Amit","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_utsf","fid":"_gqxa","gender":"male","id":"_492x","name":"Dev","birthDate":"January 1","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_utsf","fid":"_gqxa","gender":"male","id":"_ljhq","name":"Deep","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"22","fid":21,"gender":"female","id":"_04vl","name":"Reesha Patel","birthDate":"September 24, 1997","photo":"images/reecha/reesha.jpg","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_6n2s"]},
            {"mid":"22","fid":21,"gender":"female","id":"_0mjy","name":"Shena Patel","birthDate":"","photo":"images/reecha/shena.jpg","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_pbuq"]},
        {"pids":["_04vl"],"gender":"male","id":"_6n2s","name":"Akshar Patel","birthDate":"","photo":"images/reecha/axar.jpg","deathDate":"","city":"","country":"","address":"","phone":""},
        {"pids":["_0mjy"],"gender":"male","id":"_pbuq","name":"Daxesh Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
        {"pids":["_8ico"],"gender":"male","id":"_wpap","name":"Kishore Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
        {"pids":["_xgyo"],"gender":"male","id":"_6icu","name":"Bharat Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_6icu","fid":"_xgyo","gender":"male","id":"_fu6h","name":"Parth","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_2dvo"]},
            {"mid":"_6icu","fid":"_xgyo","gender":"male","id":"_kyhr","name":"Pragnesh Patel","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_0i46"]},
        {"pids":["_fu6h"],"gender":"female","id":"_2dvo","name":"Urvi","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
        {"pids":["_kyhr"],"gender":"female","id":"_0i46","name":"Upasana","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"0","fid":1,"gender":"female","id":"_48d8","name":"Dharmista (Dham ba)","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_j1b7"]},
        {"pids":["_48d8"],"gender":"male","id":"_j1b7","name":"Kiran","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_j1b7","fid":"_48d8","gender":"male","id":"_xwhc","name":"Vishal","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_wpap","fid":"_8ico","gender":"male","id":"_zo64","name":"Samrath","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":["_268a"]},
            {"mid":"_wpap","fid":"_8ico","gender":"male","id":"_aod8","name":"Vinju bhai","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
        {"pids":["_zo64"],"gender":"female","id":"_268a","name":"Mital","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":""},
            {"mid":"_268a","fid":"_zo64","gender":"female","id":"_dv1b","name":"pari","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"_268a","fid":"_zo64","gender":"female","id":"_zhje","name":"Tisha","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","pids":[]},
            {"mid":"20","fid":19,"gender":"male","id":"_r3n7","name":"Nilesh","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","":"Kaka","pids":["_l1lc"]},
        {"pids":["_r3n7"],"gender":"female","id":"_l1lc","name":"Nimisha","birthDate":"","photo":"","deathDate":"","city":"","country":"","address":"","phone":"","":"","Relationship":"Kaki"}
    ]      
);

// console.log(family.exportJSON())