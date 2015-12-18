//answer:1
var answer1 = function (console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
        counter;

    for (counter = 0; counter < names.length; counter++) {
        console.log(names[counter]);
    }
}

//answer:2
var answer2 = function (console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    names.forEach(function (name) {
        console.log(name);
    });
}

//answer:3
var answer3 = function () {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{id: 432534, time: 65876586}]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{id: 432534, time: 65876586}]
            }
        ],
        videoAndTitlePairs = [];

    newReleases.forEach(function (video) {
        videoAndTitlePairs.push({id: video.id, title: video.title});
    });

    return videoAndTitlePairs;
}

//answer:4
var answer4 = Array.prototype.map = function (projectionFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        results.push(projectionFunction(itemInArray));

    });

    return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

//answer:5
var answer5 = function () {
    var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{id: 432534, time: 65876586}]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{id: 432534, time: 65876586}]
        }
    ];

    return newReleases.map(function (video) {
        return {id: video.id, title: video.title};
    });
}

//answer:6
var answer6 = function () {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            }
        ],
        videos = [];

    newReleases.forEach(function (video) {
        if (video.rating === 5.0) {
            videos.push(video);
        }
    });

    return videos;
}

//answer:7
var answer7 = Array.prototype.filter = function (predicateFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
    });

    return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

//answer:8
var answer8 = function () {
    var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }
    ];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Chain the filter and map functions to select the id of all videos
    // with a rating of 5.0.

    return newReleases.
        filter(function (video) {
            return video.rating === 5.0;
        }).
        map(function (video) {
            return video.id;
        });
    // ------------   INSERT CODE HERE!  -----------------------------------
}

//answer:9
var answer9 = function () {
    var movieLists = [
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{id: 432534, time: 65876586}]
                    }
                ]
            },
            {
                name: "Dramas",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{id: 432534, time: 65876586}]
                    }
                ]
            }
        ],
        allVideoIdsInMovieLists = [];

    movieLists.forEach(function (movieList) {
        movieList.videos.forEach(function (video) {
            allVideoIdsInMovieLists.push(video.id);
        });
    });

    return allVideoIdsInMovieLists;

}

//answer:10
var answer10 = Array.prototype.concatAll = function () {
    var results = [];
    this.forEach(function (subArray) {
        results.push.apply(results, subArray);
    });

    return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

//answer:11
var answer11 = function () {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        },
        {
            name: "Dramas",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        }
    ];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use map and concatAll to flatten the movieLists in a list of video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------

    return movieLists.
        map(function (movieList) {
            return movieList.videos.map(function (video) {
                return video.id;
            });
        }).
        concatAll();

}

//answer:12
var answer12 = function () {
    var movieLists = [
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"}

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"},
                        {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        }
    ];


    // Use one or more map, concatAll, and filter calls to create an array with the following items
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.
        map(function (movieList) {
            return movieList.videos.
                map(function (video) {
                    return video.boxarts.
                        filter(function (boxart) {
                            return boxart.width === 150;
                        }).
                        map(function (boxart) {
                            return {id: video.id, title: video.title, boxart: boxart.url};
                        });
                }).
                concatAll();
        }).
        concatAll();

}

//answer:13
var answer13 = Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
    return this.
        map(function (item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};

/*
 var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
 // collect all the words for each number, in every language, in a single, flat list
 var allWords = [0,1,2].
 concatMap(function(index) {
 return spanishFrenchEnglishWords[index];
 });

 return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
 */

//answer:14
var answer14 = function () {
    var movieLists = [
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"}

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"},
                        {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        }
    ];


    // Use one or more concatMap, map, and filter calls to create an array with the following items
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatMap(function (movieList) {
        return movieList.videos.concatMap(function (video) {
            return video.boxarts.
                filter(function (boxart) {
                    return boxart.width === 150;
                }).
                map(function (boxart) {
                    return {id: video.id, title: video.title, boxart: boxart.url};
                });
        });
    });
}

//answer:15
var answer15 = function () {
    var boxarts = [
            {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
            {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"},
            {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"},
            {width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"}
        ],
        currentSize,
        maxSize = -1,
        largestBoxart;

    boxarts.forEach(function (boxart) {
        currentSize = boxart.width * boxart.height;
        if (currentSize > maxSize) {
            largestBoxart = boxart;
            maxSize = currentSize;
        }
    });

    return largestBoxart;
}

//answer:16
var answer16 = // [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

    Array.prototype.reduce = function (combiner, initialValue) {
        var counter,
            accumulatedValue;

        // If the array is empty, do nothing
        if (this.length === 0) {
            return this;
        }
        else {
            // If the user didn't pass an initial value, use the first item.
            if (arguments.length === 1) {
                counter = 1;
                accumulatedValue = this[0];
            }
            else if (arguments.length >= 2) {
                counter = 0;
                accumulatedValue = initialValue;
            }
            else {
                throw "Invalid arguments.";
            }

            // Loop through the array, feeding the current value and the result of
            // the previous computation back into the combiner function until
            // we've exhausted the entire array and are left with only one function.
            while (counter < this.length) {
                accumulatedValue = combiner(accumulatedValue, this[counter])
                counter++;
            }

            return [accumulatedValue];
        }
    };

//answer:17
var answer17 = function () {
    var ratings = [2, 3, 1, 4, 5];

    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
    return ratings.
        reduce(function (acc, curr) {
            if (acc > curr) {
                return acc;
            }
            else {
                return curr;
            }
        });
}

//answer:18
var answer18 = function () {
    var boxarts = [
        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"},
        {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"},
        {width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"}
    ];

    // You should return an array containing only the largest box art. Remember that reduce always
    // returns an array with one item.
    return boxarts.
        reduce(function (acc, curr) {
            if (acc.width * acc.height > curr.width * curr.height) {
                return acc;
            }
            else {
                return curr;
            }
        }).
        map(function (boxart) {
            return boxart.url;
        });
}

//answer:19
var answer19 = function () {
    var videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    // Expecting this output...
    // [
    //     {
    //         "65432445": "The Chamber",
    //         "675465": "Fracture",
    //         "70111470": "Die Hard",
    //         "654356453": "Bad Boys"
    //     }
    // ]
    return videos.
        reduce(function (accumulatedMap, video) {

            // Object.create() makes a fast copy of the accumulatedMap by
            // creating a new object and setting the accumulatedMap to be the
            // new object's prototype.
            // Initially the new object is empty and has no members of its own,
            // except a pointer to the object on which it was based. If an
            // attempt to find a member on the new object fails, the new object
            // silently attempts to find the member on its prototype. This
            // process continues recursively, with each object checking its
            // prototype until the member is found or we reach the first object
            // we created.
            // If we set a member value on the new object, it is stored
            // directly on that object, leaving the prototype unchanged.
            // Object.create() is perfect for functional programming because it
            // makes creating a new object with a different member value almost
            // as cheap as changing the member on the original object!

            var copyOfAccumulatedMap = Object.create(accumulatedMap);

            copyOfAccumulatedMap[video.id] = video.title;

            return copyOfAccumulatedMap;
        },
        // Use an empty map as the initial value instead of the first item in
        // the list.
        {});
}

//answer:20
var answer20 = function () {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
                        {width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        },
        {
            name: "Thrillers",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        {width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
                        {width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"},
                        {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        }
    ];


    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatMap(function (movieList) {
        return movieList.videos.concatMap(function (video) {
            return video.boxarts.
                reduce(function (acc, curr) {
                    if (acc.width * acc.height < curr.width * curr.height) {
                        return acc;
                    }
                    else {
                        return curr;
                    }
                }).
                map(function (boxart) {
                    return {id: video.id, title: video.title, boxart: boxart.url};
                });
        });
    });

}

//answer:21
var answer21 = function () {
    var videos = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0
            }
        ],
        bookmarks = [
            {id: 470, time: 23432},
            {id: 453, time: 234324},
            {id: 445, time: 987834}
        ],
        counter,
        videoIdAndBookmarkIdPairs = [];

    for (var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
        videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
    }

    return videoIdAndBookmarkIdPairs;
}

//answer:22
var answer22 = // JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

    Array.zip = function (left, right, combinerFunction) {
        var counter,
            results = [];

        for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
            results.push(combinerFunction(left[counter], right[counter]));
        }

        return results;
    };

//answer:23
var answer23 = function () {
    var videos = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0
            }
        ],
        bookmarks = [
            {id: 470, time: 23432},
            {id: 453, time: 234324},
            {id: 445, time: 987834}
        ];

    return Array.
        zip(
        videos,
        bookmarks,
        function (video, bookmark) {
            return {videoId: video.id, bookmarkId: bookmark.id};
        });
}

//answer:24
var answer24 = function () {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "interestingMoments": [
                        {type: "End", time: 213432},
                        {type: "Start", time: 64534},
                        {type: "Middle", time: 323133}
                    ]
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
                        {width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "interestingMoments": [
                        {type: "End", time: 54654754},
                        {type: "Start", time: 43524243},
                        {type: "Middle", time: 6575665}
                    ]
                }
            ]
        },
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        {width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"},
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "interestingMoments": [
                        {type: "End", time: 132423},
                        {type: "Start", time: 54637425},
                        {type: "Middle", time: 3452343}
                    ]
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
                        {width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"},
                        {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"}
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "interestingMoments": [
                        {type: "End", time: 45632456},
                        {type: "Start", time: 234534},
                        {type: "Middle", time: 3453434}
                    ]
                }
            ]
        }
    ];

    //------------ COMPLETE THIS EXPRESSION --------------
    return movieLists.concatMap(function (movieList) {
        return movieList.videos.concatMap(function (video) {
            return Array.zip(
                video.boxarts.reduce(function (acc, curr) {
                    if (acc.width * acc.height < curr.width * curr.height) {
                        return acc;
                    }
                    else {
                        return curr;
                    }
                }),
                video.interestingMoments.filter(function (interestingMoment) {
                    return interestingMoment.type === "Middle";
                }),
                function (boxart, interestingMoment) {
                    return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
                });
        });
    });
}

//answer:25
var answer25 = function () {
    var lists = [
            {
                "id": 5434364,
                "name": "New Releases"
            },
            {
                "id": 65456475,
                name: "Thrillers"
            }
        ],
        videos = [
            {
                "listId": 5434364,
                "id": 65432445,
                "title": "The Chamber"
            },
            {
                "listId": 5434364,
                "id": 675465,
                "title": "Fracture"
            },
            {
                "listId": 65456475,
                "id": 70111470,
                "title": "Die Hard"
            },
            {
                "listId": 65456475,
                "id": 654356453,
                "title": "Bad Boys"
            }
        ];

    return lists.map(function (list) {
        return {
            name: list.name,
            videos: videos.
                filter(function (video) {
                    return video.listId === list.id;
                }).
                map(function (video) {
                    return {id: video.id, title: video.title};
                })
        };
    });
}

//answer:26
var answer26 = function () {
    var lists = [
            {
                "id": 5434364,
                "name": "New Releases"
            },
            {
                "id": 65456475,
                name: "Thrillers"
            }
        ],
        videos = [
            {
                "listId": 5434364,
                "id": 65432445,
                "title": "The Chamber"
            },
            {
                "listId": 5434364,
                "id": 675465,
                "title": "Fracture"
            },
            {
                "listId": 65456475,
                "id": 70111470,
                "title": "Die Hard"
            },
            {
                "listId": 65456475,
                "id": 654356453,
                "title": "Bad Boys"
            }
        ],
        boxarts = [
            {videoId: 65432445, width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"},
            {videoId: 65432445, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"},
            {videoId: 675465, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
            {videoId: 675465, width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"},
            {videoId: 675465, width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"},
            {videoId: 70111470, width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
            {videoId: 70111470, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"},
            {videoId: 654356453, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
            {videoId: 654356453, width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}
        ],
        bookmarks = [
            {videoId: 65432445, time: 32432},
            {videoId: 675465, time: 3534543},
            {videoId: 70111470, time: 645243},
            {videoId: 654356453, time: 984934}
        ];

    return lists.map(function (list) {
        return {
            name: list.name,
            videos: videos.
                filter(function (video) {
                    return video.listId === list.id;
                }).
                concatMap(function (video) {
                    return Array.zip(
                        bookmarks.filter(function (bookmark) {
                            return bookmark.videoId === video.id;
                        }),
                        boxarts.filter(function (boxart) {
                            return boxart.videoId === video.id;
                        }).
                            reduce(function (acc, curr) {
                                return acc.width * acc.height < curr.width * curr.height ? acc : curr;
                            }),
                        function (bookmark, boxart) {
                            return {id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url};
                        });
                })
        };
    });

}

//answer:27
var answer27 = function (pricesNASDAQ, printRecord) {
    var microsoftPrices,
        now = new Date(),
        tenDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);

    // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
    microsoftPrices =
        pricesNASDAQ.
            filter(function (priceRecord) {
                return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
            });

    // Print the trades to the output console
    microsoftPrices.
        forEach(function (priceRecord) {
            printRecord(priceRecord);
        });
}

//answer:28
var answer28 = function (button) {
    var buttonClicks = Observable.fromEvent(button, "click");

    // Use take() to listen for only one button click
    // and unsubscribe.
    buttonClicks.
        take(1).
        forEach(function (priceRecord) {
            alert("Button was clicked once. Stopping Traversal.");
        });
}

//answer:29
var answer29 = function (pricesNASDAQ, printRecord, stopButton) {
    var stopButtonClicks = Observable.fromEvent(stopButton, "click"),
        microsoftPrices =
            pricesNASDAQ.
                filter(function (priceRecord) {
                    return priceRecord.name === "MSFT";
                }).
                takeUntil(stopButtonClicks);

    microsoftPrices.
        forEach(function (priceRecord) {
            printRecord(priceRecord);
        });
}

//answer:30
var answer30 = function (sprite, spriteContainer) {
    var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
        spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
        spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
        spriteMouseDrags =
            // For every mouse down event on the sprite...
            spriteMouseDowns.
                concatMap(function (contactPoint) {
                    // ...retrieve all the mouse move events on the sprite container...
                    return spriteContainerMouseMoves.
                        // ...until a mouse up event occurs.
                        takeUntil(spriteContainerMouseUps);
                });

    // For each mouse drag event, move the sprite to the absolute page position.
    spriteMouseDrags.forEach(function (dragPoint) {
        sprite.style.left = dragPoint.pageX + "px";
        sprite.style.top = dragPoint.pageY + "px";
    });
}

//answer:31
var answer31 = function (sprite, spriteContainer) {
    // All of the mouse event sequences look like this:
    // seq([ {pageX: 22, pageY: 3423, offsetX: 14, offsetY: 22} ,,, ])
    var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
        spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
        spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
    // Create a sequence that looks like this:
    // seq([ {pageX: 22, pageY:4080 },,,{pageX: 24, pageY: 4082},,, ])
        spriteMouseDrags =
            // For every mouse down event on the sprite...
            spriteMouseDowns.
                concatMap(function (contactPoint) {
                    // ...retrieve all the mouse move events on the sprite container...
                    return spriteContainerMouseMoves.
                        // ...until a mouse up event occurs.
                        takeUntil(spriteContainerMouseUps).
                        map(function (movePoint) {
                            return {
                                pageX: movePoint.pageX - contactPoint.offsetX,
                                pageY: movePoint.pageY - contactPoint.offsetY
                            };
                        });
                });

    // For each mouse drag event, move the sprite to the absolute page position.
    spriteMouseDrags.forEach(function (dragPoint) {
        sprite.style.left = dragPoint.pageX + "px";
        sprite.style.top = dragPoint.pageY + "px";
    });
}

//answer:32
var answer32 = function (clicks, saveData, name) {
    return clicks.
        throttle(1000).
        concatMap(function () {
            return saveData(name);
        })
}

//answer:33
var answer33 = function (getSearchResultSet, keyPresses, textBox) {

    var getSearchResultSets =
        keyPresses.
            map(function () {
                return textBox.value;
            }).
            throttle(1000).
            concatMap(function (text) {
                return getSearchResultSet(text).takeUntil(keyPresses);
            });

    return getSearchResultSets;
}

//answer:34
var answer34 = function (keyPresses, isAlpha) {

    return keyPresses.
        map(function (e) {
            return String.fromCharCode(e.keyCode);
        }).
        filter(function (character) {
            return isAlpha(character);
        }).
        distinctUntilChanged().
        scan('', function (stringSoFar, character) {
            return stringSoFar + character;
        });
}

//answer:35
var answer35 = function (getSearchResultSet, keyPresses, textBox) {

    var getSearchResultSets =
        keyPresses.
            map(function () {
                return textBox.value;
            }).
            throttle(1000).
            distinctUntilChanged().
            filter(function (s) {
                return s.length > 0;
            }).
            concatMap(function (text) {
                return getSearchResultSet(text).takeUntil(keyPresses);
            });

    return getSearchResultSets;
}

//answer:36
var answer36 = function (keyPresses, isAlpha) {

    return keyPresses.
        map(function (e) {
            return String.fromCharCode(e.keyCode);
        }).
        filter(function (character) {
            return isAlpha(character);
        }).
        distinctUntilChanged().
        scan('', function (stringSoFar, character) {
            return stringSoFar + character;
        });
}