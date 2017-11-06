function vDate(formatDate, opt)
{
	if (opt === undefined) {
		this.opt = 'default';
	} else this.opt = opt;
	if (formatDate === undefined || formatDate === 'now') {
		this.formatDate = new Date();

		this.date = this.formatDate.getDate();
		this.month = this.formatDate.getMonth() + 1;
		if(this.date < 10) {
		    this.date = '0' + this.date;
		} 
		if(this.month < 10){
		    this.month = '0' + this.month;
		} 
		this.year = this.formatDate.getFullYear();
		this.hour = this.formatDate.getHours();
		this.minute = this.formatDate.getMinutes();
		this.second = this.formatDate.getSeconds();
	} else {
		this.formatDate = formatDate.split(' ');
		if (this.formatDate.length == 2) { //Exist the time

			var _formatDate1 = this.formatDate[0];
			_formatDate1 = _formatDate1.split('/');
			this.date = this._formatDate1[0];
			this.month = this._formatDate1[1];
			this.year = this._formatDate1[2];

			var _formatDate2 = this.formatDate[1];
			_formatDate2 = _formatDate2.split(':');
			this.hour = this._formatDate2[0];
			this.minute = this._formatDate2[1];
			this.second = this._formatDate2[2];
		} else { // Dont exist time - only date
			this.formatDate = this.formatDate[0].split('/');
			this.date = this.formatDate[0];
			this.month = this.formatDate[1];
			this.year = this.formatDate[2];
		}
	}
}
vDate.prototype.format = function () {
	switch (this.opt) {
		case 'default':
			return this.date + '/' + this.month + '/' + this.year
			break;
		case 'dd/mm/yyyy hh:mm:ss':
			return this.date + '/' + this.month + '/' + this.year + ' ' + this.hour + ':' + this.minute + ':' + this.second
			break;
		case 'mm/dd/yyyy':
			return this.month + '/' + this.date + '/' + this.year;
			break;
		case 'mm/dd/yyyy hh:mm:ss':
			return this.month + '/' + this.date + '/' + this.year + ' ' + this.hour + ':' + this.minute + ':' + this.second
			break;
		default:
			return this.date + '/' + this.month + '/' + this.year
	}
};