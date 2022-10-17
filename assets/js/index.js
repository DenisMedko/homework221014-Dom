const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

function createUserCard(user) {
    const userCard = createHTMLElement('li', 
        {
            className: 'workerItem',
        }
        );
    const workerCardArticle = createHTMLElement('article', 
        {
            className: 'workerCard',
            parentElement: userCard,
        }
        );
    const imgWrapperDiv = createHTMLElement('div', 
        {
            className: 'imgWrapper',
            parentElement: workerCardArticle,
        }
        );
    const cardImg = createHTMLElement('img', 
        {
            className: 'cardImg',
            src: user.profilePicture,
            alt: `${user.firstName} ${user.lastName} profile pic`,
            parentElement: imgWrapperDiv,
        }
        ); 
    const cardInfo = createHTMLElement('div', 
        {
            className: 'cardInfo',
            parentElement: workerCardArticle,
        }
        );
    const cardNameH1 = createHTMLElement('h1', 
        {
            className: 'cardName',
            textContent: `${user.firstName} ${user.lastName}`,
            parentElement: cardInfo,
        }
        );
    const cardDescriptionP = createHTMLElement('p', 
        {
            className: 'cardDescription',
            textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaeaut placeat ullam beatae expedita et sapiente quaerat? Laudantium cupiditate beatae placeat, iste ab aliquam facere ex         expedita porro, ipsa repellendus minus, illo a. Debitis expedita a ut hic soluta necessitatibus?',
            parentElement: cardInfo,
        }
        );
    const linksContainerDiv = createHTMLElement('div', 
        {
            className: 'linksContainer',
            parentElement: cardInfo,
        }
        );
    const linksListUl = createHTMLElement('ul', 
        {
            className: 'linksList',
            parentElement: linksContainerDiv,
        }   
        );
    user.contacts.forEach(element => {
        let linkItemLi = createHTMLElement('li', 
        {
            className: 'linkItem',
            parentElement: linksListUl,
        }
        );
        let a = createHTMLElement('a', 
        {
            href: element,
            parentElement: linkItemLi,
        } 
        );
        let img = createHTMLElement('img', 
        {
            className: 'linkPic',
            src: 'facebook',
            alt: 'facebook',
            parentElement: a,
        } 
        ); 

    });
    
    return userCard;
}

function createHTMLElement(tagName, attrbutes) {
    const elem = document.createElement(tagName);
    for ([key, val] of Object.entries(attrbutes)) {
        if (key === 'parentElement') {
            val.appendChild(elem);
        } else {
            elem[key] =  val;
        }
    };
   
    return elem;
}

