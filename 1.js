var myBiodata = ()  => {
    var data = {

        
        nama : "Ahmad",
        age : "22",
        addres : [
            { Kota :"Medan",
              alamat: "jln. Eka surya",
            }
        ],
        hobbies: ['badminton', 'gaming', 'travelling'],
        is_married: false,
        
        list_school : [
            {
                name : 'Univ Kartika 1',
                year_in : 2015,
                year_out : 2020,
                major : 'Sistem Komputer'
            },
            
            {
                name : 'Sma kartika 1',
                year_in : 2012,
                year_out : 2015,
                major : null
            },
        ],
        Skills : [
            {
                skill_name : 'javascript',
                level : 'beginner'
            },
            
            {
                skill_name : 'PHP',
                level : 'beginner'
            },
            
            {
                skill_name : 'Adobe Photoshop',
                level : 'beginner'
            },
            
        ],
        "interest_in_coding" : true
        
    }
    result = JSON.stringify(data);
    return result;
};
console.log(myBiodata());