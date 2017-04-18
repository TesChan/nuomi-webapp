/**
 * Created by terry on 3/28/2017.
 */
//toggle plugin from caibaojian.com
$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
        toggler = function( event ) {
            var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
            $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
            event.preventDefault();
            return args[ lastToggle ].apply( this, arguments ) || false;
        };
    toggler.guid = guid;
    while ( i < args.length ) {
        args[ i++ ].guid = guid;
    }
    return this.click( toggler );
};