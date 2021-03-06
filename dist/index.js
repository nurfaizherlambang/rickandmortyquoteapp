let quotes = [
    ["Wubba Lubba Dub Dub!", "Rick"],
    ["What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?", "Rick"],
    ["Boom! Big reveal! I turned myself into a pickle!", "Rick"],
    ["Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.", "Morty"],
    ["To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.", "Rick"],
    ["Weddings are basically funerals with a cake.", "Rick"],
    ["If I let you make me nervous, then we can’t get schwifty.", "Rick"],
    ["Listen, Morty, I hate to break it to you, but what people call ‘love’ is just a chemical reaction that compels animals to breed.", "Rick"],
    ["Don’t move. Gonorrhea can’t see us if we don’t move. Wait! I was wrong! I was thinking of a T. rex.", "Rick"],
    ["Have fun with empowerment. It seems to make everyone that gets it really happy.", "Rick"],
    ["Listen, I’m not the nicest guy in the universe, because I’m the smartest, and being nice is something stupid people do to hedge their bets.", "Rick"],
    ["I know that new situations can be intimidating. You’re lookin’ around and it’s all scary and different, but y’know, meeting them head-on, charging into ‘em like a bull — that’s how we grow as people.", "Rick"],
    ["You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.", "Rick"],
    ["Morty, I need your help on an adventure. Eh, ‘need’ is a strong word. We need door stops, but a brick would work too.", "Rick"],
    ["I’m a scientist; because I invent, transform, create, and destroy for a living, and when I don’t like something about the world, I change it.", "Pickle Rick"],
    ["He’s not a hot girl. He can’t just bail on his life and set up shop in someone else’s.", "Beth"],
    ["Honey, stop raising your father’s cholesterol so you can take a hot funeral selfie.", "Beth"],
    ["So what if he’s the devil, Rick? At least the devil has a job. At least he’s active in the community.", "Summer"],
    ["Unity, I’m sorry. I didn’t know freedom meant people doing stuff that sucks. I was thinking more of a ‘choose your own cellphone carrier’ thing.", "Summer"],
    ["Thanks, Mr. Poopybutthole. I always could count on you.", "Rick"],
    ["Excuse me. Coming through. What are you here for? Just kidding, I don’t care.", "Rick"],
    ["So I have an emo streak. It’s part of what makes me so rad.", "Rick"],
    ["I just want to go back to hell, where everyone thinks I’m smart and funny.", "Mr. Needful"],
    ["Don’t defy the people who leave you.", "Beth"],
    ["If I die in a cage, I lose a bet.", "Rick"],
    ["Yeah, sure, I mean, if you spend all day shuffling words around, you can make anything sound bad, Morty.", "Rick"],
    ["Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing.", "Rick"],
    ["Your parents are a bag of dicks.", "Rick"],
    ["I’m sorry, but your opinion means very little to me.", "Rick"],
    ["Hi Mr. Jellybean, I’m Morty. I’m on an adventure with my grandpa.", "Morty"],
    ["B*tch, my generation gets traumatized for breakfast!", "Summer"],
    ["You’re the little brother. You’re not the cause of your parents’ misery, you’re just a symptom of it.", "Summer"]
];

function randomize() {
    let randoms = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randoms][0];
    let author = quotes[randoms][1];
    $('#text').html(quote);
    $('#author').html("- " + author);
    $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=rickandmorty&related=rickandmorty&text=' + encodeURIComponent('"' + quote + '" ' + '- ' + author));
};

$(document).ready(function() {
    randomize();
    $('#new-quote').click(() => randomize());
});