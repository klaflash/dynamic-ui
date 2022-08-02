const display = () => {

    const home = document.querySelector('.home');
    const homePage = document.querySelector('.home-page');
    const payments = document.querySelector('.payments');
    const paymentsPage = document.querySelector('.payments-page');
    const add = document.querySelector('.add');
    const addPage = document.querySelector('.add-page');
    const wallet = document.querySelector('.wallet');
    const walletPage = document.querySelector('.wallet-page');
    const scan = document.querySelector('.scan');
    const scanPage = document.querySelector('.scan-page');

    homePage.classList.add('display-page');

    home.addEventListener('click', () => {
        paymentsPage.classList.remove('display-page');
        addPage.classList.remove('display-page');
        walletPage.classList.remove('display-page');
        scanPage.classList.remove('display-page');

        homePage.classList.add('display-page');
    });

    payments.addEventListener('click', () => {
        addPage.classList.remove('display-page');
        walletPage.classList.remove('display-page');
        scanPage.classList.remove('display-page');
        homePage.classList.remove('display-page');

        paymentsPage.classList.add('display-page');
    });

    add.addEventListener('click', () => {
        walletPage.classList.remove('display-page');
        scanPage.classList.remove('display-page');
        homePage.classList.remove('display-page');
        paymentsPage.classList.remove('display-page');

        addPage.classList.add('display-page');
    });

    wallet.addEventListener('click', () => {
        addPage.classList.remove('display-page');
        scanPage.classList.remove('display-page');
        homePage.classList.remove('display-page');
        paymentsPage.classList.remove('display-page');

        walletPage.classList.add('display-page');
    });

    scan.addEventListener('click', () => {
        walletPage.classList.remove('display-page');
        addPage.classList.remove('display-page');
        homePage.classList.remove('display-page');
        paymentsPage.classList.remove('display-page');

        scanPage.classList.add('display-page');
    });

    document.querySelector('.profile').addEventListener('click', () => {
        document.querySelector('.menu').classList.add('show');
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('show');
    });

    document.querySelector('.empty').addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('show');
    });

};

display();