import { get } from 'lodash';
import moment from 'moment';
import twemoji from 'twemoji';

export default class {

    constructor(tweetProperties) {
        this.tweetProperties = tweetProperties;
    }

    get authorScreenName() {
        return '@' + this.tweetProperties['user']['screen_name'];
    }

    get authorName() {
        return this.tweetProperties['user']['name'];
    }

    get authorAvatar() {
        return this.tweetProperties['user']['profile_image_url_https'];
    }

    get image() {
        return get(this.tweetProperties, 'extended_entities.media[0].media_url_https', '');
    }

    get date() {
        return moment(this.tweetProperties['created_at'], 'dd MMM DD HH:mm:ss ZZ YYYY');
    }

    get text() {
        let text = this.tweetProperties['text'];

        if (this.tweetProperties.hasOwnProperty('display_text_range')) {
            text = text.substr(...this.tweetProperties['display_text_range']);
        }

        text = get(this.tweetProperties, 'extended_entities.media', [])
            .map(media => media.url)
            .reduce((text, mediaUrl) => text.replace(mediaUrl, ''), text);

        return text;
    }

    get html() {
        let text = twemoji.parse(this.text);

        // http://stackoverflow.com/a/38383605/999733
        return text.replace(
            /(#\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g,
            '<span class="tweet__body__hashtag">$1</span>'
        ).replace(
            /(@\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g,
            '<span class="tweet__body__handle">$1</span>'
        );
    }

    get displayClass() {
        if (this.text.length < 30) {
            return 'large';
        }

        if (this.text.length < 60) {
            return 'medium';
        }

        if (this.text.length < 100) {
            return 'default';
        }

        return 'small';
    }
}
