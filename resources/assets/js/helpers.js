import { upperFirst } from 'lodash';
import moment from 'moment';

export function formatNumber(value) {
    if (! value) {
        return 0;
    }

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function addClassModifiers(base, modifiers = []) {
    if (! Array.isArray(modifiers)) {
        modifiers = modifiers.split(' ');
    }

    modifiers = modifiers.map(modifier => `${base}--${modifier}`);

    return [base, ...modifiers];
}

export function relativeDate(value) {
    const date = moment(value);

    if (moment().isSame(date, 'd')) {
        return 'Today';
    }

    if (moment().add(1, 'day').isSame(date, 'd')) {
        return 'Tomorrow';
    }

    if (date.isBetween(moment().add(1, 'day'), moment().add(8, 'days'), 'day')) {
        return 'Next ' + date.format('dddd');
    }

    return 'In ' + date.toNow(true);
}

function isToday(date) {
    return moment().isSame(date, 'd');
}

export function relativeDateTime(value) {
    const date = moment(value);

    if (moment().diff(date, 'days') > 5) {
        return 'A long long time ago';
    }

    if (moment().diff(date, 'days') > 1) {
        return `${moment().diff(date, 'days')} days ago`;
    }

    if (moment().diff(date, 'hours') >= 24) {
        return 'A day ago';
    }

    if (moment().diff(date, 'hours') > 1) {
        return `${moment().diff(date, 'hours')} hours ago`;
    }

    if (moment().diff(date, 'minutes') > 59) {
        return 'An hour ago';
    }

    if (moment().diff(date, 'seconds') > 119) {
        return `${moment().diff(date, 'minutes')} minutes ago`;
    }

    if (moment().diff(date, 'seconds') >= 60) {
        return 'A minute ago';
    }

    return 'Just now';
}

export function diffInSeconds(otherMoment) {
    return moment().diff(otherMoment, 'seconds');
}
