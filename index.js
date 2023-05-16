//JavaScript
var family = new FamilyTree(document.getElementById('tree'), {
    mouseScrool: FamilyTree.action.none,
    scaleInitial: FamilyTree.match.boundary,
    mode: 'dark',
    editForm: {readOnly: true},
    nodeBinding: {
        field_0: "name",
        field_1: "birthDate",
        img_0: "photo"
    },
});


family.load(
    [
        { id: 0, pids: [1], gender: 'male', name: 'Yuriy Gusev', birthDate: '1867-09-16', deathDate: '1922-06-29', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
        { id: 1, pids: [0], gender: 'female', name: 'Nastya Pushkina', birthDate: '1873-07-03', deathDate: '1933-05-05', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
        { id: 2, pids: [3], gender: 'female', name: 'Agnessa Semenova', fid: 0, mid: 1, birthDate: '1909-05-03', deathDate: '1992-05-20', photo: 'https://cdn.balkan.app/shared/w60/2.jpg', city: "Krasnodar", country: "Russia" },
        { id: 3, pids: [2], gender: 'male', name: 'Isai Vasiliev', birthDate: '1907-06-22', deathDate: '1987-11-20', photo: 'https://cdn.balkan.app/shared/m60/2.jpg', city: "Krasnodar", country: "Russia" },
        { id: 4, pids: [5], gender: 'male', name: 'Yermolai Kozlov', fid: 3, mid: 2, birthDate: '1940-05-13', photo: 'https://cdn.balkan.app/shared/m60/3.jpg', address: "Neybuta, bld. 57, appt. 336", city: "Primorskiy kray", phone: "+7(4232)14-90-18", country: "Russia" },
        { id: 5, pids: [4], gender: 'female', name: 'Julija Popova', fid: 21, mid: 22, birthDate: '1942-10-02', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', address: "Neybuta, bld. 57, appt. 336", city: "Primorskiy kray", phone: "+7(861)166-92-10", country: "Russia" },
        { id: 6, pids: [10, 11], gender: 'male', name: 'Savin Makarov', fid: 4, mid: 5, birthDate: '1964-11-21', photo: 'https://cdn.balkan.app/shared/m30/1.jpg', address: "Tankista Belorossova Ul., bld. 2, appt. 51", city: "Ivanovo", phone: "+7(4932)86-83-67", country: "Russia" },
        { id: 7, gender: 'female', name: 'Ekaterina Fedoroa', fid: 4, mid: 5, birthDate: '1965-03-15', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', address: "Ul Krasilnikova, bld. 24", city: "Kemerovo", phone: "+7(3842)45-38-84", country: "Russia" },
        { id: 10, pids: [6], gender: 'female', name: 'Efrosinia Sorokina', birthDate: '1977-03-03', photo: 'https://cdn.balkan.app/shared/w30/2.jpg', address: "Lenina, bld. 175/1, appt. 43", city: "Rostov-na-donu", phone: "+7(863)354-67-14", country: "Russia" },
        { id: 11, pids: [6], gender: 'female', name: 'Gulistanskiy Baranova', birthDate: '1979-04-26', photo: 'https://cdn.balkan.app/shared/w30/3.jpg', address: "Surkova, bld. 14, appt. 52", city: "Chelyabinsk", phone: "+7(351)121-01-17", country: "Russia" },
        { id: 19, pids: [20], gender: 'male', name: 'Yasha Nikitin', birthDate: '1893-06-05', photo: 'https://cdn.balkan.app/shared/m60/4.jpg', city: "Shelekhov", country: "Russia" },
        { id: 20, pids: [19], gender: 'female', name: 'Polina Guseva', birthDate: '1891-09-19', photo: 'https://cdn.balkan.app/shared/w60/4.jpg', city: "Shelekhov", country: "Russia" },
        { id: 21, pids: [22], gender: 'male', name: 'Samuil Kozlov', fid: 19, mid: 20, birthDate: '1921-07-14', photo: 'https://cdn.balkan.app/shared/m60/5.jpg', city: "Krasnoyarsk", country: "Russia" },
        { id: 22, pids: [21], gender: 'female', name: 'Borbala Morozova', birthDate: '1933-11-02', photo: 'https://cdn.balkan.app/shared/w60/5.jpg', city: "Krasnoyarsk", country: "Russia" }
    ]
);
