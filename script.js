// script.js

// --- Economist Card Data ---
// All image_url values have been updated with direct links from ImgBB.
const economistCardsData = [
    { name: "Aristotle", ovr: 41, category: "Pre-Classical", me: 40, gi: 30, ap: 60, se: 50, ea: 20, ps: 30, special_trait: "Philosophical Foundations: Gain +5 AP when facing ethical dilemmas.", image_url: "https://i.ibb.co/HLvWJQ3T/Aristotle.png" },
    { name: "Plato", ovr: 44, category: "Pre-Classical", me: 30, gi: 70, ap: 65, se: 60, ea: 15, ps: 25, special_trait: "Ideal State Blueprint: When played, briefly reduce opponent's ME by 10 points.", image_url: "https://i.ibb.co/hR0zXKf5/Plato.png" },
    { name: "Ibn Khaldun", ovr: 64, category: "Pre-Classical", me: 50, gi: 40, ap: 70, se: 55, ea: 70, ps: 80, special_trait: "Cyclical Theory: Reveals upcoming economic problems (next 1-2 turns).", image_url: "https://i.ibb.co/ptjD3mT/Ibn-Khaldun.png" },
    { name: "Adam Smith", ovr: 69, category: "Classical", me: 95, gi: 20, ap: 75, se: 50, ea: 40, ps: 95, special_trait: "Invisible Hand: +15 ME when opponent plays a GI-focused card.", image_url: "https://i.ibb.co/Z1TP5jPQ/Adam-Smith.png" },
    { name: "David Ricardo", ovr: 66, category: "Classical", me: 85, gi: 30, ap: 80, se: 45, ea: 50, ps: 85, special_trait: "Comparative Advantage: +10 ME against international trade problems.", image_url: "https://i.ibb.co/6cg8fRC7/David-Ricardo.png" },
    { name: "Thomas Malthus", ovr: 63, category: "Classical", me: 60, gi: 40, ap: 70, se: 55, ea: 60, ps: 70, special_trait: "Population Trap: If played, next round's problem will focus on resource scarcity.", image_url: "https://i.ibb.co/Q3JzRkHm/Thomas-Malthus.png" },
    { name: "John Stuart Mill", ovr: 63, category: "Classical", me: 70, gi: 55, ap: 70, se: 70, ea: 50, ps: 60, special_trait: "Utilitarian Balance: Can redistribute 10 points from one attribute to another on this card.", image_url: "https://i.ibb.co/jZq6YpM7/John-Stuart-Mill.png" },
    { name: "Jean-Baptiste Say", ovr: 55, category: "Classical", me: 90, gi: 25, ap: 65, se: 30, ea: 30, ps: 40, special_trait: "Say's Law: If played, ensures demand matches supply in next round for your team (no negative score from demand issues).", image_url: "https://i.ibb.co/1YtxD3pf/Jean-Baptiste-Say.png" },
    { name: "Karl Marx", ovr: 58, category: "Marxian", me: 10, gi: 90, ap: 75, se: 95, ea: 50, ps: 95, special_trait: "Class Struggle: If played, gain +15 SE if opponent has high ME (>70).", image_url: "https://i.ibb.co/8LmxC4vS/Karl-Marx.png" },
    { name: "Alfred Marshall", ovr: 69, category: "Neoclassical", me: 75, gi: 40, ap: 85, se: 60, ea: 65, ps: 80, special_trait: "Supply & Demand: Can see the 'primary' attribute of the next economic problem.", image_url: "https://i.ibb.co/F4M4rvSh/Alfred-Marshall.png" },
    { name: "Léon Walras", ovr: 67, category: "Neoclassical", me: 80, gi: 30, ap: 90, se: 40, ea: 45, ps: 75, special_trait: "General Equilibrium: Gain +10 AP if playing a second Neoclassical card in your hand.", image_url: "https://i.ibb.co/jP2j7Fsb/L-on-Walras.png" },
    { name: "Carl Menger", ovr: 60, category: "Austrian", me: 85, gi: 30, ap: 80, se: 35, ea: 30, ps: 70, special_trait: "Marginal Utility: Can reroll one of your own attribute scores once per game (on this card).", image_url: "https://i.ibb.co/Txydmttn/Carl-Menger.png" },
    { name: "William Stanley Jevons", ovr: 59, category: "Neoclassical", me: 80, gi: 35, ap: 80, se: 30, ea: 50, ps: 70, special_trait: "Rational Consumer: +10 ME when an opponent plays a high GI card.", image_url: "https://i.ibb.co/PZypWnLB/William-Stanley-Jevons.png" },
    { name: "Vilfredo Pareto", ovr: 66, category: "Neoclassical", me: 70, gi: 45, ap: 88, se: 55, ea: 60, ps: 65, special_trait: "Pareto Efficiency: When played, if your team has no negative score from the round, gain +5 points.", image_url: "https://i.ibb.co/Kxtmc5mr/Vilfredo-Pareto.png" },
    { name: "Arthur Cecil Pigou", ovr: 62, category: "Neoclassical", me: 60, gi: 65, ap: 70, se: 75, ea: 55, ps: 50, special_trait: "Externalities Correction: If played, reduce the negative impact of an opponent's high ME score by 5 points.", image_url: "https://i.ibb.co/JwvJkh8D/Arthur-Cecil-Pigou.png" },
    { name: "Ludwig von Mises", ovr: 57, category: "Austrian", me: 90, gi: 10, ap: 80, se: 20, ea: 30, ps: 70, special_trait: "Praxeology: Ignores opponent's GI score for this round's calculation.", image_url: "https://i.ibb.co/gbXLQPtC/Ludwig-von-Mises.png" },
    { name: "Friedrich Hayek", ovr: 59, category: "Austrian", me: 95, gi: 15, ap: 75, se: 30, ea: 40, ps: 90, special_trait: "Road to Serfdom: If opponent plays a high GI card, +10 ME for your team.", image_url: "https://i.ibb.co/yBmFVbcc/Friedrich-Hayek.png" },
    { name: "John Maynard Keynes", ovr: 77, category: "Keynesian", me: 40, gi: 95, ap: 85, se: 70, ea: 70, ps: 95, special_trait: "Aggregate Demand: +15 GI against problems related to recessions or unemployment.", image_url: "https://i.ibb.co/G30kCvLT/John-Maynard-Keynes.png" },
    { name: "Paul Samuelson", ovr: 74, category: "Keynesian", me: 70, gi: 60, ap: 95, se: 65, ea: 75, ps: 80, special_trait: "Neoclassical Synthesis: Can combine two attributes for a single impactful score in one round.", image_url: "https://i.ibb.co/fY7q7mrc/Paul-Samuelson.png" },
    { name: "Paul Krugman", ovr: 68, category: "New Keynesian", me: 50, gi: 75, ap: 80, se: 60, ea: 85, ps: 70, special_trait: "Trade & Geography: Can influence the next economic problem to favor international trade or regional issues.", image_url: "https://i.ibb.co/GvLQ28pQ/Paul-Krugman.png" },
    { name: "Milton Friedman", ovr: 68, category: "Chicago School", me: 90, gi: 15, ap: 70, se: 30, ea: 90, ps: 85, special_trait: "Monetary Policy: If played, can reduce the impact of an opponent's GI by 10 points.", image_url: "https://i.ibb.co/HL2WNZN4/Milton-Friedman.png" },
    { name: "Amartya Sen", ovr: 75, category: "Welfare/Development", me: 40, gi: 70, ap: 75, se: 95, ea: 80, ps: 80, special_trait: "Capabilities Approach: +15 SE against problems related to poverty or welfare.", image_url: "https://i.ibb.co/35HtwQwp/Amartya-Sen.png" },
    { name: "Simon Kuznets", ovr: 69, category: "Development", me: 60, gi: 50, ap: 70, se: 60, ea: 95, ps: 75, special_trait: "GDP Pioneer: Provides insight into the economic problem's quantitative aspects (e.g., target numbers).", image_url: "https://i.ibb.co/sDY9VWY/Simon-Kuznets.png" },
    { name: "Daniel Kahneman", ovr: 71, category: "Behavioral", me: 50, gi: 50, ap: 85, se: 60, ea: 90, ps: 90, special_trait: "Behavioral Insights: Can reveal an opponent's highest attribute for the current round.", image_url: "https://i.ibb.co/cK7NXf5J/Daniel-Kahneman.png" },
    { name: "John Nash", ovr: 66, category: "Game Theory", me: 50, gi: 50, ap: 100, se: 40, ea: 30, ps: 90, special_trait: "Game Theory: Can force opponent to reveal one card from their hand.", image_url: "https://i.ibb.co/Kp8VpMpz/John-Nash.png" },
    { name: "Kenneth Arrow", ovr: 69, category: "Game Theory", me: 60, gi: 55, ap: 95, se: 70, ea: 40, ps: 85, special_trait: "Impossibility Theorem: Can nullify an opponent's Special Trait for the current round.", image_url: "https://i.ibb.co/YFCRsfhT/Kenneth-Arrow.png" },
    { name: "Joseph Stiglitz", ovr: 73, category: "Information", me: 50, gi: 75, ap: 85, se: 80, ea: 70, ps: 80, special_trait: "Asymmetric Information: If played, can see one attribute score of an opponent's unplayed card.", image_url: "https://i.ibb.co/xqqs0M47/Joseph-Stiglitz.png" },
    { name: "George Akerlof", ovr: 71, category: "Information", me: 55, gi: 60, ap: 80, se: 70, ea: 85, ps: 75, special_trait: "Market for Lemons: Can debuff opponent's 'Market Efficiency' score by 10 for the round.", image_url: "https://i.ibb.co/7xz20YBm/George-Akerlof.png" },
    { name: "Thomas Piketty", ovr: 74, category: "Contemporary", me: 40, gi: 80, ap: 75, se: 90, ea: 90, ps: 80, special_trait: "Capital in the 21st Century: +15 SE if opponent's wealth-related attribute is high.", image_url: "https://i.ibb.co/cXFQtBwC/Thomas-Piketty.png" },
];

// --- 100 Economic Problems Data ---
const economicProblems = [
    { description: "The nation is experiencing rampant inflation, eroding purchasing power and creating economic uncertainty.", relevantAttribute: "GI" },
    { description: "Unemployment rates are soaring, leading to social unrest and underutilized productive capacity.", relevantAttribute: "GI" },
    { description: "A severe recession has gripped the economy, with falling demand and business closures.", relevantAttribute: "GI" },
    { description: "Income inequality has reached extreme levels, threatening social cohesion and long-term growth.", relevantAttribute: "SE" },
    { description: "A key industry has become a monopoly, leading to inflated prices and reduced consumer choice.", relevantAttribute: "ME" },
    { description: "The national debt is spiraling out of control, raising concerns about future fiscal stability.", relevantAttribute: "GI" },
    { description: "Technological advancements are displacing workers at an unprecedented rate, creating structural unemployment.", relevantAttribute: "PS" },
    { description: "A sudden supply shock (e.g., oil crisis) has disrupted production and fueled stagflation.", relevantAttribute: "EA" },
    { description: "Developing nations are struggling with low productivity and lack of infrastructure.", relevantAttribute: "SE" },
    { description: "The housing market is in a bubble, with unsustainable price increases threatening a crash.", relevantAttribute: "GI" },
    { description: "Persistent trade deficits are weakening the national currency and hurting domestic industries.", relevantAttribute: "ME" },
    { description: "Environmental degradation is imposing significant external costs on society, not captured by market prices.", relevantAttribute: "GI" },
    { description: "Despite low interest rates, businesses are not investing, leading to stagnant growth.", relevantAttribute: "GI" },
    { description: "There's a crisis of confidence in financial institutions, leading to a credit crunch.", relevantAttribute: "GI" },
    { description: "Poverty is widespread in urban areas, leading to increased crime and social fragmentation.", relevantAttribute: "SE" },
    { description: "A new disruptive technology has emerged, challenging existing economic models and industries.", relevantAttribute: "PS" },
    { description: "Globalization has led to job losses in traditional manufacturing sectors.", relevantAttribute: "SE" },
    { description: "The national currency is experiencing rapid appreciation, making exports uncompetitive.", relevantAttribute: "GI" },
    { description: "An aging population is putting immense strain on social security and healthcare systems.", relevantAttribute: "EA" },
    { description: "Corruption is rampant, undermining trust in institutions and hindering economic development.", relevantAttribute: "AP" },
    { description: "A sudden fall in commodity prices has devastated the economy of a resource-dependent nation.", relevantAttribute: "ME" },
    { description: "High levels of consumer debt are making the economy vulnerable to shocks.", relevantAttribute: "GI" },
    { description: "The informal economy is vast, leading to lost tax revenue and lack of worker protection.", relevantAttribute: "GI" },
    { description: "Persistent deflation is discouraging spending and investment, leading to a deflationary spiral.", relevantAttribute: "GI" },
    { description: "Lack of competition in key sectors is stifling innovation and raising consumer costs.", relevantAttribute: "ME" },
    { description: "The cost of education is rising exponentially, limiting access and exacerbating inequality.", relevantAttribute: "SE" },
    { description: "Rapid urbanization is leading to infrastructure strain and environmental challenges.", relevantAttribute: "AP" },
    { description: "A significant portion of the workforce lacks necessary skills for the modern economy.", relevantAttribute: "PS" },
    { description: "Speculative bubbles in asset markets are creating systemic risks.", relevantAttribute: "GI" },
    { description: "The public sector is inefficient, delivering poor services despite high spending.", relevantAttribute: "ME" },
    { description: "Climate change is imposing increasing economic costs, including natural disasters and resource depletion.", relevantAttribute: "PS" },
    { description: "Brain drain is depleting the human capital of developing nations.", relevantAttribute: "SE" },
    { description: "A liquidity trap has rendered conventional monetary policy ineffective.", relevantAttribute: "GI" },
    { description: "The banking system is too concentrated, posing 'too big to fail' risks.", relevantAttribute: "GI" },
    { description: "The global supply chain is vulnerable to disruptions, leading to shortages and price spikes.", relevantAttribute: "EA" },
    { description: "Technological monopolies are stifling competition and consumer welfare.", relevantAttribute: "ME" },
    { description: "Rural areas are experiencing depopulation and economic decline.", relevantAttribute: "SE" },
    { description: "The exchange rate is highly volatile, deterring international investment.", relevantAttribute: "GI" },
    { description: "Lack of access to credit is hindering small business growth and entrepreneurship.", relevantAttribute: "GI" },
    { description: "Excessive government bureaucracy is a major barrier to business and investment.", relevantAttribute: "ME" },
    { description: "The economy is overly reliant on a single industry, making it vulnerable to shocks.", relevantAttribute: "PS" },
    { description: "Informal labor markets offer no social protection or fair wages.", relevantAttribute: "SE" },
    { description: "A sudden burst of innovation is causing rapid destruction of old industries.", relevantAttribute: "PS" },
    { description: "Public pensions are underfunded, threatening the retirement security of future generations.", relevantAttribute: "EA" },
    { description: "The country is facing a debt crisis, unable to repay its international creditors.", relevantAttribute: "GI" },
    { description: "There's a significant gender pay gap, hindering economic potential and fairness.", relevantAttribute: "SE" },
    { description: "Rampant speculation in financial markets is creating instability.", relevantAttribute: "GI" },
    { description: "The healthcare system is inefficient and unaffordable for many citizens.", relevantAttribute: "SE" },
    { description: "A shortage of skilled labor is hindering growth in high-tech sectors.", relevantAttribute: "GI" },
    { description: "Rising protectionism is disrupting global trade and cooperation.", relevantAttribute: "ME" },
    { description: "The financial system is experiencing a run on banks due to lack of trust.", relevantAttribute: "GI" },
    { description: "Agricultural output is declining due to climate change and unsustainable practices.", relevantAttribute: "EA" },
    { description: "The regulatory environment is overly complex, stifling business creation.", relevantAttribute: "ME" },
    { description: "A large informal sector is hindering tax collection and economic planning.", relevantAttribute: "GI" },
    { description: "Youth unemployment is critically high, leading to social unrest.", relevantAttribute: "SE" },
    { description: "The global economy is facing a new wave of automation, impacting job markets worldwide.", relevantAttribute: "PS" },
    { description: "There is a severe lack of affordable housing in major cities.", relevantAttribute: "GI" },
    { description: "The national education system is failing to produce graduates with relevant skills.", relevantAttribute: "PS" },
    { description: "Excessive government spending is crowding out private investment.", relevantAttribute: "ME" },
    { description: "A country's natural resources are being exploited unsustainably, leading to future scarcity.", relevantAttribute: "EA" },
    { description: "There's a significant disparity in economic development between regions within a country.", relevantAttribute: "SE" },
    { description: "A major bank is on the verge of collapse, threatening the entire financial system.", relevantAttribute: "GI" },
    { description: "The economy is experiencing deflation due to weak consumer demand.", relevantAttribute: "GI" },
    { description: "Lack of property rights security is deterring investment and development.", relevantAttribute: "ME" },
    { description: "A trade war has erupted, severely impacting global supply chains.", relevantAttribute: "ME" },
    { description: "The gap between rich and poor is widening due to regressive tax policies.", relevantAttribute: "SE" },
    { description: "High interest rates are stifling economic growth and increasing borrowing costs.", relevantAttribute: "GI" },
    { description: "The shadow banking system is growing unregulated, posing systemic risks.", relevantAttribute: "GI" },
    { description: "Persistent current account deficits signal a fundamental imbalance in the economy.", relevantAttribute: "EA" },
    { description: "The economy is suffering from a lack of entrepreneurship and new business formation.", relevantAttribute: "PS" },
    { description: "Pension systems are unsustainable due to demographic shifts.", relevantAttribute: "SE" },
    { description: "A severe drought is causing food shortages and rising agricultural prices.", relevantAttribute: "EA" },
    { description: "Government subsidies are distorting market signals and creating inefficiencies.", relevantAttribute: "ME" },
    { description: "The public education system is underperforming, leading to a less skilled workforce.", relevantAttribute: "GI" },
    { description: "A severe housing crisis is pricing out low and middle-income families.", relevantAttribute: "SE" },
    { description: "Rapid technological change is making existing economic policies obsolete.", relevantAttribute: "PS" },
    { description: "The informal sector is too large, leading to weak governance and poor worker conditions.", relevantAttribute: "AP" },
    { description: "The national currency is experiencing rapid depreciation, increasing import costs.", relevantAttribute: "GI" },
    { description: "Limited access to essential services (water, electricity) hinders development in certain areas.", relevantAttribute: "SE" },
    { description: "Over-regulation is stifling innovation and competition in new industries.", relevantAttribute: "ME" },
    { description: "The banking sector is experiencing widespread loan defaults.", relevantAttribute: "GI" },
    { description: "The gig economy is growing rapidly, but workers lack traditional benefits.", relevantAttribute: "PS" },
    { description: "A significant portion of the population is living in energy poverty.", relevantAttribute: "SE" },
    { description: "Fiscal policies are pro-cyclical, exacerbating booms and busts.", relevantAttribute: "AP" },
    { description: "High levels of external debt are making the country vulnerable to financial shocks.", relevantAttribute: "GI" },
    { description: "Lack of consumer trust in financial products is hindering investment.", relevantAttribute: "ME" },
    { description: "The national infrastructure is crumbling, impeding economic activity.", relevantAttribute: "GI" },
    { description: "Technological advancements are leading to a jobless recovery after recessions.", relevantAttribute: "PS" },
    { description: "The country is caught in a middle-income trap, unable to advance to high-income status.", relevantAttribute: "EA" },
    { description: "Excessive lobbying by special interest groups is distorting economic policy.", relevantAttribute: "AP" },
    { description: "Resource nationalization has led to a decline in foreign investment.", relevantAttribute: "ME" },
    { description: "The national research and development (R&D) spending is too low.", relevantAttribute: "GI" },
    { description: "An economic shock has led to widespread business bankruptcies.", relevantAttribute: "GI" },
    { description: "Rising automation threatens the traditional employment model.", relevantAttribute: "PS" },
    { description: "There's a significant digital divide, excluding many from the modern economy.", relevantAttribute: "SE" },
    { description: "The country's demographics are unfavorable, with a rapidly aging workforce.", relevantAttribute: "EA" },
    { description: "Price controls are creating black markets and shortages.", relevantAttribute: "ME" },
    { description: "High corporate taxes are deterring foreign direct investment.", relevantAttribute: "GI" },
    { description: "A financial contagion is spreading rapidly across global markets.", relevantAttribute: "GI" },
    { description: "The economy is struggling with low total factor productivity growth.", relevantAttribute: "AP" },
];

// --- Game State Variables ---
let playerHand = [];
let opponentHand = [];
let selectedEconomistCard = null; // Stores the currently selected card object
let currentEconomicProblem = null;
let playerScore = 0;
let opponentScore = 0;
let currentRound = 0;
let gameMode = 'score'; // 'score' or 'rounds'
let targetScore = 50;
let totalRounds = 5;
let isGameActive = false; // Controls if game is in progress

// --- DOM Elements ---
const playerHandDiv = document.getElementById('playerHand');
const playerCardPreview = document.getElementById('playerCardPreview');
const opponentCardPreview = document.getElementById('opponentCardPreview');
const playCardButton = document.getElementById('playCardButton');
const economicProblemDisplay = document.getElementById('economicProblem');
const playerScoreDisplay = document.getElementById('playerScore');
const opponentScoreDisplay = document.getElementById('opponentScore');
const currentRoundDisplay = document.getElementById('currentRoundDisplay');

const gameSetupModal = document.getElementById('gameSetupModal');
const startGameButton = document.getElementById('startGameButton');
const gameModeRadios = document.querySelectorAll('input[name="gameMode"]');
const scoreSettings = document.getElementById('scoreSettings');
const roundsSettings = document.getElementById('roundsSettings');
const targetScoreInput = document.getElementById('targetScore');
const totalRoundsInput = document.getElementById('totalRounds');

const gameOverModal = document.getElementById('gameOverModal');
const gameOverResult = document.getElementById('gameOverResult');
const gameOverMessage = document.getElementById('gameOverMessage');
const finalPlayerScore = document.getElementById('finalPlayerScore');
const finalOpponentScore = document.getElementById('finalOpponentScore');
const restartGameButton = document.getElementById('restartGameButton');


/**
 * Renders a single economist card HTML element for display in hand or played area.
 * @param {Object} cardData - The data for the economist card.
 * @param {boolean} isPlayerHandCard - True if this card is in the player's hand and clickable.
 * @returns {HTMLElement} The created card element.
 */
function createEconomistCardElement(cardData, isPlayerHandCard = false) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('economist-card', 'relative', 'overflow-hidden'); // Add relative for overlay/disabled
    cardDiv.setAttribute('data-name', cardData.name); // Store name for selection
    cardDiv.setAttribute('data-category', cardData.category.replace(/\s/g, '-').toLowerCase()); // For potential styling

    const imageUrl = cardData.image_url;
    const fallbackImageUrl = `https://placehold.co/200x150/A7B7C7/334155?text=${encodeURIComponent(cardData.name.replace(/\s/g, '+'))}`;

    cardDiv.innerHTML = `
        <img src="${imageUrl}" alt="${cardData.name}" class="card-image" onerror="this.onerror=null;this.src='${fallbackImageUrl}';">
        <div class="card-content">
            <div class="card-name">${cardData.name}</div>
            <div class="card-ovr">OVR ${cardData.ovr}</div>
            <div class="card-category">${cardData.category}</div>
            <div class="card-attributes">
                <div class="attribute-item"><span class="attribute-label">ME:</span> <span class="attribute-value">${cardData.me}</span></div>
                <div class="attribute-item"><span class="attribute-label">GI:</span> <span class="attribute-value">${cardData.gi}</span></div>
                <div class="attribute-item"><span class="attribute-label">AP:</span> <span class="attribute-value">${cardData.ap}</span></div>
                <div class="attribute-item"><span class="attribute-label">SE:</span> <span class="attribute-value">${cardData.se}</span></div>
                <div class="attribute-item"><span class="attribute-label">EA:</span> <span class="attribute-value">${cardData.ea}</span></div>
                <div class="attribute-item"><span class="attribute-label">PS:</span> <span class="attribute-value">${cardData.ps}</span></div>
            </div>
            <div class="card-special-trait">"${cardData.special_trait}"</div>
        </div>
    `;

    if (isPlayerHandCard) {
        cardDiv.addEventListener('click', () => selectCard(cardData, cardDiv));
    } else {
        // For cards shown in played area, remove hover effects and set default styles
        cardDiv.style.cursor = 'default';
        cardDiv.classList.add('scale-90'); // Slightly smaller for played area
        cardDiv.classList.remove('hover:translate-y-[-5px]', 'hover:scale-[1.02]', 'hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]', 'hover:border-indigo-600');
    }
    return cardDiv;
}

/**
 * Selects an economist card from the hand.
 * @param {Object} cardData - The data of the selected card.
 * @param {HTMLElement} cardElement - The HTML element of the selected card.
 */
function selectCard(cardData, cardElement) {
    if (!isGameActive) return; // Only allow selection if game is active

    // Check if the card is already disabled (played)
    if (cardElement.classList.contains('disabled-card')) {
        return; // Cannot select a disabled card
    }

    // Deselect any previously selected card
    const previouslySelected = document.querySelector('.economist-card.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Select the new card
    cardElement.classList.add('selected');
    selectedEconomistCard = cardData; // Store the actual card data
    playCardButton.disabled = false; // Enable the play button
}

/**
 * Displays a card in a smaller preview format for the played card area.
 * @param {Object} cardData - The data of the card to display.
 * @param {HTMLElement} targetElement - The element where the preview should be rendered.
 */
function displayPlayedCardPreview(cardData, targetElement) {
    if (!cardData) {
        targetElement.innerHTML = 'No card played yet.';
        return;
    }

    const imageUrl = cardData.image_url;
    const fallbackImageUrl = `https://placehold.co/100x75/A7B7C7/334155?text=${encodeURIComponent(cardData.name.replace(/\s/g, '+'))}`;

    targetElement.innerHTML = `
        <img src="${imageUrl}" alt="${cardData.name}" class="w-24 h-18 rounded-lg shadow-md mr-4 object-cover" onerror="this.onerror=null;this.src='${fallbackImageUrl}';">
        <div class="text-left flex flex-col justify-center">
            <h3 class="text-base font-bold text-gray-900">${cardData.name}</h3>
            <p class="text-sm text-gray-600">OVR: ${cardData.ovr}</p>
            <p class="text-xs text-gray-700">Trait: ${cardData.special_trait.substring(0, 40)}...</p>
        </div>
    `;
}

/**
 * Draws a unique 5-card team for a player from the available cards.
 * @param {Array} allCards - The complete pool of economist cards.
 * @returns {Array} A 5-card team.
 */
function drawInitialTeam(allCards) {
    const team = [];
    const availableCards = [...allCards]; // Create a mutable copy

    if (availableCards.length < 5) {
        console.error("Not enough unique cards to draw a 5-card team!");
        return [];
    }

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const card = availableCards.splice(randomIndex, randomIndex + 1)[0]; // Remove and get the card
        team.push(card);
    }
    return team;
}

/**
 * Renders the player's current hand to the UI.
 */
function renderPlayerHand() {
    playerHandDiv.innerHTML = ''; // Clear previous hand
    selectedEconomistCard = null; // Reset selected card
    playCardButton.disabled = true; // Disable play button until card is selected
    playerCardPreview.innerHTML = 'No card played yet.'; // Clear played card preview
    opponentCardPreview.innerHTML = 'No card played yet.'; // Clear played card preview

    if (playerHand.length === 0) {
        playerHandDiv.innerHTML = '<p class="col-span-full text-gray-500 text-center">Your hand is empty. Game Over or Restart.</p>';
        return;
    }

    playerHand.forEach(card => {
        const cardElement = createEconomistCardElement(card, true); // True for player hand cards
        playerHandDiv.appendChild(cardElement);
    });
}

/**
 * AI logic to select a card.
 * @param {Array} hand - The AI's current hand.
 * @param {Object} problem - The current economic problem.
 * @returns {Object} The card selected by the AI.
 */
function aiSelectCard(hand, problem) {
    let bestCard = null;
    let highestScore = -1;
    const attribute = problem.relevantAttribute.toLowerCase(); // e.g., "gi", "me"

    // Simple AI: pick card with highest relevant attribute
    for (const card of hand) {
        const cardAttributeValue = card[attribute]; // Access attribute dynamically
        if (cardAttributeValue > highestScore) {
            highestScore = cardAttributeValue;
            bestCard = card;
        }
    }
    return bestCard;
}

/**
 * Applies special trait effects to the attribute scores.
 * NOTE: This is a placeholder for most traits. You will need to implement
 * the specific logic for each trait based on its description.
 *
 * @param {Object} card - The card whose trait is being applied.
 * @param {Object} problem - The current economic problem.
 * @param {string} playerType - 'player' or 'opponent' to determine who benefits.
 * @param {Object} playerCard - The player's chosen card (for comparison traits).
 * @param {Object} opponentCard - The opponent's chosen card (for comparison traits).
 * @returns {number} The adjusted attribute value after applying the trait.
 */
function applySpecialTrait(card, problem, playerType, playerCard, opponentCard) {
    let effectiveAttributeValue = card[problem.relevantAttribute.toLowerCase()];
    const trait = card.special_trait;

    switch (card.name) {
        case "Adam Smith":
            if (trait.includes("Invisible Hand") && playerType === 'player' && opponentCard && opponentCard.gi > 70) {
                effectiveAttributeValue += 15;
                console.log(`${card.name}'s Invisible Hand activated! +15 ${problem.relevantAttribute}`);
            }
            break;
        case "Karl Marx":
            if (trait.includes("Class Struggle") && problem.relevantAttribute === 'SE' && playerType === 'player' && opponentCard && opponentCard.me > 70) {
                 effectiveAttributeValue += 15;
                 console.log(`${card.name}'s Class Struggle activated! +15 ${problem.relevantAttribute}`);
            }
            break;
        case "John Maynard Keynes":
            if (trait.includes("Aggregate Demand") && playerType === 'player' && (problem.description.includes("recession") || problem.description.includes("unemployment"))) {
                effectiveAttributeValue += 15;
                console.log(`${card.name}'s Aggregate Demand activated! +15 ${problem.relevantAttribute}`);
            }
            break;
        case "Friedrich Hayek":
            // This trait (Road to Serfdom) affects the player's ME, so it should be checked on the player's card.
            // If the opponent plays a high GI card, Hayek (if played by player) gets a boost.
            if (trait.includes("Road to Serfdom") && playerType === 'player' && opponentCard && opponentCard.gi > 70 && problem.relevantAttribute === 'ME') {
                effectiveAttributeValue += 10;
                console.log(`${card.name}'s Road to Serfdom activated! Player's ME +10.`);
            }
            break;
        case "Amartya Sen":
            if (trait.includes("Capabilities Approach") && playerType === 'player' && (problem.description.includes("poverty") || problem.description.includes("welfare")) && problem.relevantAttribute === 'SE') {
                effectiveAttributeValue += 15;
                console.log(`${card.name}'s Capabilities Approach activated! +15 ${problem.relevantAttribute}`);
            }
            break;
        case "Thomas Piketty":
            if (trait.includes("Capital in the 21st Century") && playerType === 'player' && (problem.description.includes("inequality") || problem.description.includes("wealth")) && problem.relevantAttribute === 'SE') {
                 effectiveAttributeValue += 15;
                 console.log(`${card.name}'s Capital in the 21st Century activated! +15 ${problem.relevantAttribute}`);
            }
            break;
        case "Kenneth Arrow":
            // Arrow's trait "Impossibility Theorem" is tricky because it "nullifies" an opponent's trait.
            // This means it needs to modify how the *opponent's* trait is applied.
            // For simplicity in a direct comparison, we'll give Arrow a small direct boost if an opponent would benefit from a trait.
            // A more complex system would require a different trait application order or a mutable game state.
            if (trait.includes("Impossibility Theorem") && playerType === 'player' && opponentCard && opponentCard.special_trait !== "No specific trait logic for") {
                // If opponent has *any* trait, Arrow gets a bonus
                effectiveAttributeValue += 10; // Example: small boost for nullifying
                console.log(`${card.name}'s Impossibility Theorem: Opponent's trait potentially nullified.`);
            }
            break;
        case "Vilfredo Pareto":
            // This trait provides points if no negative score. This would be applied after the round, not during attribute calculation.
            break;
        case "Carl Menger":
            // This trait (re-roll) would require specific UI interaction. Not implemented in automatic comparison.
            break;
        case "John Nash":
            // This trait (reveal opponent's card) is for information gathering, not direct attribute modification. Not implemented in automatic comparison.
            break;
        case "Joseph Stiglitz":
            // This trait (see unplayed card) is for information gathering, not direct attribute modification. Not implemented in automatic comparison.
            break;
        case "George Akerlof":
            // This trait (debuff opponent's ME) would affect the opponent's score calculation.
            if (trait.includes("Market for Lemons") && playerType === 'player' && problem.relevantAttribute === 'ME' && opponentCard) {
                // This trait would reduce opponent's ME *before* opponent's trait is applied or during comparison.
                // For this current simple model, it would need to be applied to opponentEffectiveScore.
                // Best handled by modifying the opponent's score directly in playCard function if this trait is played.
            }
            break;
        // Add more specific trait implementations here
        default:
            // No special effect or not yet implemented
            break;
    }

    return effectiveAttributeValue;
}


/**
 * Handles the logic for playing a card and resolving the round.
 */
async function playCard() {
    if (!selectedEconomistCard) {
        alert("Please select a card to play!");
        return;
    }
    if (!isGameActive) {
        console.warn("Game is not active. Cannot play card.");
        return;
    }

    // Disable play button and card selection during round resolution
    playCardButton.disabled = true;
    // Visually disable all cards in hand to prevent re-selection during AI turn/resolution
    playerHandDiv.querySelectorAll('.economist-card').forEach(cardElement => {
        cardElement.classList.add('disabled-card');
        cardElement.style.pointerEvents = 'none';
    });


    // Player's move
    const playerPlayedCard = selectedEconomistCard;
    displayPlayedCardPreview(playerPlayedCard, playerCardPreview);

    // Remove played card from player's hand (important for subsequent rounds)
    playerHand = playerHand.filter(card => card.name !== playerPlayedCard.name);


    // AI's move
    const opponentPlayedCard = aiSelectCard(opponentHand, currentEconomicProblem);
    if (opponentPlayedCard) {
        displayPlayedCardPreview(opponentPlayedCard, opponentCardPreview);
        opponentHand = opponentHand.filter(card => card.name !== opponentPlayedCard.name); // Remove from AI hand
    } else {
        // This case should ideally not happen if hands are managed correctly and game ends when cards run out
        opponentCardPreview.innerHTML = 'Opponent ran out of cards!';
    }


    // Determine effective scores for the round
    let playerEffectiveScore = playerPlayedCard[currentEconomicProblem.relevantAttribute.toLowerCase()];
    let opponentEffectiveScore = opponentPlayedCard ? opponentPlayedCard[currentEconomicProblem.relevantAttribute.toLowerCase()] : -999; // Very low if AI has no card

    // IMPORTANT: Apply special traits for *both* players.
    // Some traits might modify opponent's score, so we need to pass both cards.
    // A more advanced trait system would involve a 'context' object passed around.

    // Calculate player's effective score including their trait
    playerEffectiveScore = applySpecialTrait(playerPlayedCard, currentEconomicProblem, 'player', playerPlayedCard, opponentPlayedCard);

    // Calculate opponent's effective score including their trait
    if (opponentPlayedCard) {
        opponentEffectiveScore = applySpecialTrait(opponentPlayedCard, currentEconomicProblem, 'opponent', playerPlayedCard, opponentPlayedCard);
    }

    // Handle traits that explicitly debuff the opponent (e.g., Akerlof, Arrow if it's a debuff)
    if (playerPlayedCard.name === "George Akerlof" && currentEconomicProblem.relevantAttribute === 'ME' && opponentPlayedCard) {
        opponentEffectiveScore -= 10; // Akerlof debuffs opponent's ME by 10
        console.log("George Akerlof's Market for Lemons: Opponent's ME debuffed by 10.");
    }
    // If Kenneth Arrow (player's card) "nullifies" opponent trait, adjust opponent's score.
    // This is a simple model for nullification; real nullification would prevent the opponent's trait logic from running.
    if (playerPlayedCard.name === "Kenneth Arrow" && opponentPlayedCard && opponentPlayedCard.special_trait && opponentPlayedCard.special_trait !== "No specific trait logic for") {
        // If Arrow is played by player and opponent has a special trait, reduce opponent's score to simulate nullification
        opponentEffectiveScore = Math.max(0, opponentEffectiveScore - 20); // Example: arbitrary reduction
        console.log("Kenneth Arrow's Impossibility Theorem: Opponent's score reduced due to trait nullification.");
    }


    // Compare and award points
    let roundMessage = "";
    if (playerEffectiveScore > opponentEffectiveScore) {
        playerScore += 10;
        roundMessage = `You win this round! Your ${currentEconomicProblem.relevantAttribute} score: ${playerEffectiveScore}, Opponent's: ${opponentEffectiveScore}.`;
    } else if (opponentEffectiveScore > playerEffectiveScore) {
        opponentScore += 10;
        roundMessage = `Opponent wins this round! Your ${currentEconomicProblem.relevantAttribute} score: ${playerEffectiveScore}, Opponent's: ${opponentEffectiveScore}.`;
    } else {
        roundMessage = `It's a draw this round! Both ${currentEconomicProblem.relevantAttribute} scores: ${playerEffectiveScore}.`;
    }

    // Update score display
    playerScoreDisplay.textContent = playerScore;
    opponentScoreDisplay.textContent = opponentScore;

    // Show round result (can be an alert or a temporary message)
    await new Promise(resolve => setTimeout(() => {
        alert(roundMessage); // Using alert for now for clear feedback
        resolve();
    }, 500)); // Short delay to see the cards

    currentRound++;
    currentRoundDisplay.textContent = currentRound;

    // Check for game over
    checkGameOver();

    if (isGameActive) {
        startRound(); // Start next round if game is still active
    }
}


/**
 * Checks if the game has ended based on chosen mode and conditions.
 */
function checkGameOver() {
    let gameOver = false;
    let winner = null;
    let message = "";

    // Check for running out of cards
    if (playerHand.length === 0 && opponentHand.length === 0) {
        gameOver = true;
        if (playerScore > opponentScore) {
            winner = "Player";
            message = "Both players ran out of cards! You win by score!";
        } else if (opponentScore > playerScore) {
            winner = "Opponent";
            message = "Both players ran out of cards! The Opponent wins by score!";
        } else {
            winner = "No one";
            message = "It's a draw! Both players ran out of cards.";
        }
    } else if (playerHand.length === 0) {
        gameOver = true;
        winner = "Opponent";
        message = "You ran out of cards! The Opponent wins!";
    } else if (opponentHand.length === 0) {
        gameOver = true;
        winner = "Player";
        message = "The Opponent ran out of cards! You win!";
    }

    // Check game mode specific conditions
    if (gameMode === 'score' && !gameOver) {
        if (playerScore >= targetScore) {
            gameOver = true;
            winner = "Player";
            message = `Congratulations! You reached ${targetScore} points!`;
        } else if (opponentScore >= targetScore) {
            gameOver = true;
            winner = "Opponent";
            message = `The Opponent reached ${targetScore} points!`;
        }
    } else if (gameMode === 'rounds' && !gameOver) {
        if (currentRound >= totalRounds) {
            gameOver = true;
            if (playerScore > opponentScore) {
                winner = "Player";
                message = `All ${totalRounds} rounds completed! You have more points!`;
            } else if (opponentScore > playerScore) {
                winner = "Opponent";
                message = `All ${totalRounds} rounds completed! The Opponent has more points!`;
            } else {
                winner = "No one";
                message = `All ${totalRounds} rounds completed! It's a tie!`;
            }
        }
    }

    if (gameOver) {
        endGame(winner, message);
    } else {
        // Re-enable player interaction for next round if game is active
        // This is done implicitly by renderPlayerHand and startRound
    }
}


/**
 * Ends the game and displays the result modal.
 * @param {string} winner - The name of the winner ('Player' or 'Opponent' or 'No one').
 * @param {string} message - A message describing the game outcome.
 */
function endGame(winner, message) {
    isGameActive = false;
    gameOverModal.classList.remove('hidden');
    gameOverResult.textContent = `Game Over! ${winner === 'No one' ? "It's a Draw!" : winner === 'Player' ? "You Win!" : "You Lose!"}`;
    gameOverMessage.textContent = message;
    finalPlayerScore.textContent = playerScore;
    finalOpponentScore.textContent = opponentScore;
    playCardButton.disabled = true; // Ensure button is disabled
    playerHandDiv.innerHTML = '<p class="col-span-full text-gray-500 text-center">Game Over. Click "Play Again" to restart.</p>'; // Clear hand area on game over
}

/**
 * Starts a new round of the game.
 */
function startRound() {
    // Check if the game should continue or if a game over condition has been met.
    if (!isGameActive) {
        return; // Game is not active, likely ended by checkGameOver
    }

    // Ensure players still have cards if not playing fixed rounds
    if (playerHand.length === 0 || opponentHand.length === 0) {
        checkGameOver(); // This will trigger endGame if necessary
        return;
    }

    // Pick a random economic problem
    const randomIndex = Math.floor(Math.random() * economicProblems.length);
    currentEconomicProblem = economicProblems[randomIndex];
    economicProblemDisplay.textContent = currentEconomicProblem.description;

    // Reset UI for the new round
    playerCardPreview.innerHTML = '<p class="text-gray-500">Player Card:</p><div class="min-h-[100px]">No card played yet.</div>';
    opponentCardPreview.innerHTML = '<p class="text-gray-500">Opponent Card:</p><div class="min-h-[100px]">No card played yet.</div>';
    selectedEconomistCard = null;
    playCardButton.disabled = true;

    // Deselect any previously selected card in hand
    const previouslySelected = document.querySelector('.economist-card.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    currentRoundDisplay.textContent = currentRound; // Update round display
    console.log(`--- Starting Round ${currentRound} ---`);
    console.log(`Problem: ${currentEconomicProblem.description} (Relevant: ${currentEconomicProblem.relevantAttribute})`);

    // Re-enable player interaction for the current hand
    playerHandDiv.style.pointerEvents = 'auto'; // Re-enable pointer events on the hand container
    renderPlayerHand(); // Re-render hand to ensure clickable and clean state
}


/**
 * Initializes the game, including modal setup.
 */
function initializeGame() {
    resetGame(); // Ensure a clean slate
    showGameSetupModal();
}

/**
 * Handles the start game button click from the setup modal.
 */
function setupGameParametersAndStart() {
    gameMode = document.querySelector('input[name="gameMode"]:checked').value;
    if (gameMode === 'score') {
        targetScore = parseInt(targetScoreInput.value);
        if (isNaN(targetScore) || targetScore < 10) {
            alert("Please enter a valid target score (minimum 10).");
            return;
        }
    } else { // rounds mode
        totalRounds = parseInt(totalRoundsInput.value);
        if (isNaN(totalRounds) || totalRounds < 1 || totalRounds > 30) {
            alert("Please enter a valid number of rounds (1-30).");
            return;
        }
    }

    hideGameSetupModal();
    resetGame(); // Reset all game state again just in case
    dealInitialHands(); // Deal new hands for player and AI
    isGameActive = true;
    startRound(); // Start the first round
}

/**
 * Shows the game setup modal.
 */
function showGameSetupModal() {
    gameSetupModal.classList.remove('hidden');
}

/**
 * Hides the game setup modal.
 */
function hideGameSetupModal() {
    gameSetupModal.classList.add('hidden');
}


// Initialize the game when the window loads
window.onload = initializeGame;
