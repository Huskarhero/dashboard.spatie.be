import _ from 'lodash';
import moment from 'moment';

export default class {

    constructor(tweetProperties) {
        this.tweetProperties = tweetProperties;
    }

    get authorScreenName() {
        return '@'+this.tweetProperties['user']['screen_name'];
    }

    get authorName() {
        return this.tweetProperties['user']['name'];
    }

    get authorAvatar() {
        return this.tweetProperties['user']['profile_image_url_https'];
    }

    get image() {
        return _.get(this.tweetProperties, 'extended_entities.media[0].media_url_https', '');
    }

    get date() {
        return moment(this.tweetProperties['created_at'], 'dd MMM DD HH:mm:ss ZZ YYYY');
    }

    get text() {
        let text = this.tweetProperties['text'];

        if (this.tweetProperties.hasOwnProperty('display_text_range')) {
            text = text.substr(...this.tweetProperties['display_text_range']);
        }

        let mediaUrls = _.get(this.tweetProperties, 'extended_entities.media', []).map(media => media.url)

        for (let i = 0; i < mediaUrls.length; i++) {
            text = text.replace(mediaUrls[0], '');
        }

        return text;
    }

    get displayClass() {
        if (this.text.length < 40) {
            return 'default'
        }

        if (this.text.length < 140) {
            return 'medium'
        }

        return 'small'
    }
}
