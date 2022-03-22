export function get_value_below(max) {
    return Math.floor(Math.random() * max);
}

export function get_positive_value_below(max) {
    return Math.max(1, get_value_below(max));
}

export function select_from(data) {
    return data[get_value_below(data.length)];
}

export function select_many_from(data, count) {
    let ret = [];
    for (let i = 0; i < count; i++) {
        ret.push(select_from(data));
    }
    return ret;
}

export function select_up_to_from(data, max, positive=false) {
    let count = positive ? get_positive_value_below(max) : get_value_below(max);
    return select_many_from(data, count);
}

export function random_string(length) {
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.";
    return select_up_to_from(choices, length).join('');
}