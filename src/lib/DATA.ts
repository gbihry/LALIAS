export interface Situations {
	[key: string]: Situation;
}

export interface Situation {
	steps: SituationSteps;
	url: string;
}

export interface SituationSteps {
	[key: string]: SituationStep;
}

export interface SituationStep {
	readonly answers: string[];
	base_line: string;
	readonly blank_state: string[];
	name: string;
	url_image: string;
	readonly words: string[];
}

const DICTIONARY = [
	'Hello',
	'Thanks',
	'Please',
	'Yes',
	'No',
	'Sorry',
	'Excuse me',
	'See you later',
	'Goodbye',
	"I'm sorry",
	"I don't understand"
] as const;

const SITUATIONS: Situations = {
	airport: {
		steps: {
			accueil: {
				answers: ['coffee'],
				base_line: 'Hello, what do you want ?',
				blank_state: ['Hello, one ', 'please'],
				name: 'Reception',
				url_image: 'https://picsum.photos/500/300',
				words: ['coffee', 'table', 'restaurant menu']
			},
			addition: {
				answers: ['use', 'credit'],
				base_line: 'How do you want to pay ?',
				blank_state: ['I will ', ' the', 'card please'],
				name: 'Paiement',
				url_image: 'https://picsum.photos/600/300',
				words: ['use', 'credit']
			},
			order: {
				answers: ['would like', 'a coffee'],
				base_line: 'What would you like to order?',
				blank_state: ['Hello, I ', 'order', 'please'],
				name: 'Order',
				url_image: 'https://picsum.photos/600/300',
				words: ['would like', 'a coffee', 'a dinosaur']
			}
		},
		url: 'https://picsum.photos/500/300'
	},
	hotel: {
		steps: {
			reception: {
				answers: ['room', 'two'],
				base_line: 'Hello, can I help you ?',
				blank_state: ['Hello, a ', 'for', 'please'],
				name: 'Reception',
				url_image: 'https://picsum.photos/500/300',
				words: ['room', 'two', 'toilet']
			},
			order: {
				answers: ['a burger', 'and'],
				base_line: 'What would you like to order ?',
				blank_state: ['Hello,', 'please', 'a orangina please'],
				name: 'Order',
				url_image: 'https://picsum.photos/600/300',
				words: ['a burger', 'and', 'a duck']
			}
		},
		url: 'https://picsum.photos/500/300'
	}
} as const;

export { DICTIONARY, SITUATIONS };
