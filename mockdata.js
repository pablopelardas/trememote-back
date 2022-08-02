/* eslint-disable no-undef */
const users = [
    {id: 1000, username:'pablo',email:'pablo@asd.asd',password:'asd123'},
    {id: 1001, username:'mroomes0',email:'wwissby0@prnewswire.com',password:'Iy9zvrKlTNLo'},
    {id: 1002, username:'rwrintmore1',email:'ndornan1@addtoany.com',password:'O8YFgt0tB'},
    {id: 1003, username:'tschlagman2',email:'jkiernan2@123-reg.co.uk',password:'SX1kU3ZcxGd'},
    {id: 1004, username:'sansty3',email:'hpeever3@independent.co.uk',password:'3x5x6ZG'},
    {id: 1005, username:'ntimoney4',email:'sbaldelli4@moonfruit.com',password:'vGiPJk1o'},
    {id: 1006, username:'astreetfield5',email:'ggladbach5@parallels.com',password:'Mvlft3Xa'},
    {id: 1007, username:'clohrensen6',email:'glyver6@ucsd.edu',password:'v0CiiW'},
    {id: 1008, username:'aelen7',email:'trapo7@360.cn',password:'GtZnis'},
    {id: 1009, username:'cmossdale8',email:'hcucuzza8@go.com',password:'9w5ZC34'},
    {id: 1010, username:'fbootland9',email:'wtourot9@princeton.edu',password:'kCOqeI'}
];


const posts = (users) => [
    {
        id: 1000,
        title: 'Radio Inside',
        content: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
        user_id: users[6],
    },
    {
        id: 1001,
        title: 'GoldenEye',
        content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        user_id: users[6]
    },
    {
        id: 1002,
        title: 'Boys Don\'t Cry (Chlopaki nie placza)',
        content: 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        user_id: users[6]
    },
    {
        id: 1003,
        title: 'House Party 2',
        content: 'Integer ac neque. Duis bibendum.',
        user_id: users[6]
    },
    {
        id: 1004,
        title: 'Born to Be Wild',
        content: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
        user_id: users[10]
    },
    {
        id: 1005,
        title: 'Bran Nue Dae',
        content: 'Etiam vel augue.',
        user_id: users[11]
    },
    {
        id: 1006,
        title: 'Thorn Birds, The',
        content: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
        user_id: users[11]
    },
    {
        id: 1007,
        title: 'Angel Named Billy, An',
        content: 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
        user_id: users[10]
    },
    {
        id: 1008,
        title: 'John Huston: The Man, the Movies, the Maverick',
        content: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
        user_id: users[7]
    },
    {
        id: 1009,
        title: 'Big Time Operators (Smallest Show on Earth, The)',
        content: 'Praesent blandit. Nam nulla.',
        user_id: users[8]
    },
    {
        id: 1010,
        title: 'Item, The',
        content: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
        user_id: users[3]
    },
    {
        id: 1011,
        title: 'Miss Congeniality',
        content: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        user_id: users[6]
    },
    {
        id: 1012,
        title: 'My Favorite Martian',
        content: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
        user_id: users[4]
    },
    {
        id: 1013,
        title: 'Mysterious Mr. Moto',
        content: 'Nulla tellus. In sagittis dui vel nisl.',
        user_id: users[3]
    },
    {
        id: 1014,
        title: 'Foon',
        content: 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
        user_id: users[4]
    },
    {
        id: 1015,
        title: 'All the Young Men',
        content: 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
        user_id: users[9]
    },
    {
        id: 1016,
        title: 'Thousand Acres, A',
        content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
        user_id: users[1]
    },
    {
        id: 1017,
        title: 'Because I Said So',
        content: 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        user_id: users[7]
    },
    {
        id: 1018,
        title: 'Food, Inc.',
        content: 'Phasellus in felis. Donec semper sapien a libero.',
        user_id: users[9]
    },
    {
        id: 1019,
        title: 'Gross Anatomy (a.k.a. A Cut Above)',
        content: 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        user_id: users[8]
    },
    {
        id: 1020,
        title: 'House of 9',
        content: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
        user_id: users[1]
    },
    {
        id: 1021,
        title: 'Feel the Noise',
        content: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        user_id: users[6]
    },
    {
        id: 1022,
        title: 'Generation X',
        content: 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        user_id: users[10]
    },
    {
        id: 1023,
        title: 'Rickshaw Man, The (Muhomatsu no issho)',
        content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
        user_id: users[1]
    },
    {
        id: 1024,
        title: 'Please Vote for Me',
        content: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        user_id: users[11]
    },
    {
        id: 1025,
        title: 'Lonesome',
        content: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
        user_id: users[5]
    },
    {
        id: 1026,
        title: 'Von Richthofen and Brown',
        content: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
        user_id: users[5]
    },
    {
        id: 1027,
        title: 'Cat and the Canary, The',
        content: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        user_id: users[2]
    },
    {
        id: 1028,
        title: 'Manderlay',
        content: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        user_id: users[10]
    },
    {
        id: 1029,
        title: 'First Target',
        content: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        user_id: users[7]
    }
];

module.exports = {
    users,
    posts
};