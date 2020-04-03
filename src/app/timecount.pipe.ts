import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 59) // less than 59 seconds ago
                return 'Just now';
            const timeInterval = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let timecount;
            for (const j in timeInterval) {
                timecount = Math.floor(seconds / timeInterval[j]);
                if (timecount > 0)
                    if (timecount === 1) {
                        return timecount + ' ' + j + ' ago';
                    } else {
                        return timecount + ' ' + j + ' ago';
                    }
            }
        }
        return value;
    }
}

