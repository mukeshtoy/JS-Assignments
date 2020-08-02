var quotes = [
    'Success is not final; failure is not fatal: It is the courage to continue that counts.  -Winston S. Churchill',
     'It is better to fail in originality than to succeed in imiation. -Herman Melville',
     'The road to success and the road to failure are almost exactly the same. -Colin R. Dav',
     'Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau',
     'Opportunities don\'t happen. You create them. -Chris Grosser',
     'Don\'t be afraid to give up the good to go for the great. -John D. Rockefeller',
     'I find that the harder I work, the more luck I seem to have. -Thomas Jefferson',
     'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. -Ray Goforth',
     'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better. -Jim Rohn',
     'Try not to become a man of success. Rather become a man of value. -Albert Einstein',
     'Never give in except to convictions of honor and good sense. -Winston Churchill',
     'Stop chasing the money and start chasing the passion. -Tony Hsieh',
     'Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill'
]

function Quotes() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}