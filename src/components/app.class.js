/**
 * @class  Resizer
 * @author Bruno SIMON / http://bruno-simon.com
 */
B.Components.App = B.Core.Abstract.extend(
{
    options:
    {

    },

    /**
     * Initialise and merge options
     * @constructor
     * @param {object} options Properties to merge with defaults
     */
    construct : function( options )
    {
        this._super( options );

        this.ticker   = new B.Tools.Ticker();
        this.viewport = new B.Tools.Viewport();
        this.css      = new B.Tools.Css();
        this.keyboard = new B.Tools.Keyboard();
        this.mouse    = new B.Tools.Mouse();
        this.ga_tags  = new B.Tools.GA_Tags();

        console.log( 'All good' );
    }
} );
