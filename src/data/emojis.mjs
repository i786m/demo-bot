import { getRandomElementFrom } from '../utils/utils.mjs';

const headerEmojis = [
	':alert:',
	':codeyourfuture:',
	':presentation:',
	':computer_desk:',
	':computer-3:',
	':computer_desk:',
	':sparkler:',
	':star-animated:',
	':yay:',
	':mustacheparrot:',
	':computer-4:',
	':cool-doge:',
	':yay:',
	':typing-cat:',
	':star-u:',
	':timer-clock-animated:',
];

const headerEmojisCYF = [
	':alert:',
	':codeyourfuture:',
	':presentation:',
	':computer_desk:',
	':computer-3:',
	':computer_desk:',
	':sparkler:',
	':star-animated:',
	':yay:',
	':mustacheparrot:',
	':computer-4:',
	':yay:',
	':typing-cat:',
	':star-u:',
	':timer-clock-animated:',
];

const headerEmojisITP = [
	':alert:',
	':codeyourfuture:',
	':sparkler:',
	':yay:',
	':computer:',
	':alert2:',
	':party1:',
	':cool-doge:',
	':its_magic:',
	':yey:',
];

const headerEmojisITD = [
	':alert:',
	':codeyourfuture:',
	':sparkler:',
	':computer:',
	':aussie_parrot:',
	':doge:',
	':mario_luigi_dance:',
	':ohyeah:',
];

const ctaEmojisCYF = [
	':eyes:',
	':exploding_head:',
	':thinking_face:',
	':raised_hands:',
	':hugging_face:',
	':partying_face:',
	':muscle:',
	':male-detective:',
	':technologist:',
	':eye-in-speech-bubble:',
	':people_hugging:',
	':teamwork:',
	':so_cool:',
	':cheer:',
	':greatwork:',
	':clapping:',
	':coffee_computer:',
];

const ctaEmojis = [
	':eyes:',
	':exploding_head:',
	':thinking_face:',
	':clap:',
	':raised_hands:',
	':hugging_face:',
	':partying_face:',
	':muscle:',
	':male-detective:',
	':technologist:',
	':eye-in-speech-bubble:',
	':people_hugging:',
	':teamwork:',
	':well_done:',
];

/**
 * Gets a random header emoji based on the workspace
 * @param {string} workspace - The workspace for which to get an emoji
 * @returns {string} - A random header emoji
 */
export const getRandomHeaderEmoji = (workspace) => {
    if (workspace === 'CYF') {
        return getRandomElementFrom(headerEmojisCYF);
    } else if (workspace === 'ITP') {
        return getRandomElementFrom(headerEmojisITP);
    } else if (workspace === 'ITD') {
        return getRandomElementFrom(headerEmojisITD);
    } else {
        return getRandomElementFrom(headerEmojis);
    }
};

/**
 * Gets a random CTA emoji based on the workspace
 * @param {string} workspace - The workspace for which to get an emoji
 * @returns {string} - A random CTA emoji
 */
export const getRandomCtaEmoji = (workspace) => {
    if (workspace === 'CYF') {
        return getRandomElementFrom(ctaEmojisCYF);
    } else {
        return getRandomElementFrom(ctaEmojis);
    }
};