![Azure Media Services logo](http://amsplayer.azurewebsites.net/img/logo.png)

# [Azure Media Player](http://aka.ms/azuremediaplayer "Azure Media Player") #

Azure Media Player is a web video player built to playback media content from Microsoft Azure Media Services on a wide variety of browsers and devices. Azure Media Player utilizes industry standards, such as HTML5, Media Source Extensions (MSE) and Encrypted Media Extensions (EME) to provide an enriched adaptive streaming experience.  When these standards are not available on a device or in a browser, Azure Media Player uses Flash and Silverlight as fallback technology. This allows for content served by Azure Media Services to be played across a wide-range of devices and browsers without any extra effort.

Microsoft Azure Media Services allows for content to be served up with DASH, SMOOTH and HLS manifests to playback content. Azure Media Player takes into account these various formats and automatically plays the best link based on the platform/browser capabilities. Microsoft Azure Media Services also allows for dynamic encryption of assets with PlayReady encryption or AES-128 bit envelope encryption. Azure Media Player allows for decryption of PlayReady and AES-128 bit encrypted content when appropriately configured.  See the "adding content protection" section for how to configure this.

## Quick start ##
Simply add the following includes to your document's `<head>`:

    <link href="//example.com/path/to/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
    <script src="//example.com/path/to/azuremediaplayer.min.js"></script>
    <script>
      amp.options.flashSS.swf = "//example.com/path/to/techs/StrobeMediaPlayback.2.0.swf"
      amp.options.flashSS.plugin = "//example.com/path/to/techs/MSAdaptiveStreamingPlugin-v1.0.13-osmf2.0.swf"
      amp.options.silverlightSS.xap = "//example.com/path/to/techs/SmoothStreamingPlayer.xap"
    </script>

>**Note:** If you choose to use a self host Azure Media Player, you'll need to host the JavaScript, CSS and fallback tech files. Simply copy the zip file contents into your project, and update the file paths.

Next, simply use the `<video>` element as your normally would, but with an additional `data-setup` attribute containing any options. These options
can include any Azure Media Services option in a valid JSON object.

    <video id="vid1" class="amp amp-default-skin" autoplay controls preload="auto" width="640" height="400" poster="poster.jpg" data-setup='{"techOrder": ["azureHtml5JS", "flashSS", "silverlightSS", "html5"], "nativeControlsForTouch": false}'>
    	<source src="http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest" type="application/vnd.ms-sstr+xml" />
    	<p class="vjs-no-js">
			To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
		</p>
    </video>


If you don't want to use auto-setup, you can leave off the `data-setup` attribute and initialize a video element manually.

	var myPlayer = amp('vid1', { /* Options */
            techOrder: ["azureHtml5JS", "flashSS", "silverlightSS", "html5"],
            "nativeControlsForTouch": false,
            autoplay: false,
            preload: "auto",
            controls: true,
            width: "640",
            height: "400",
            poster: ""
		}, function() {
      		console.log('Good to go!');
      		this.play(); // if you don't trust autoplay for some reason
       		// add an event listener
      		this.on('ended', function() {
    			console.log('Finished!');
      	}
	);
	myPlayer.src([{ 
		src: "http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest", 
		type: "application/vnd.ms-sstr+xml"
	]);


## License ##

Azure Media Player is currently licensed under pre-release terms and thus the user assumes all risk in using this preview version.  Please see license file for full terms.

Copyright 2014 Microsoft Corporation.

----------
# Full Setup of Azure Media Player#

Azure Media Player is easy to set up. It only takes a few moments to get basic playback of media content right from your Azure Media Services account.


## Step 1: Include the Javascript and CSS files in the head of your page. ##

With Azure Media Player, you can host the source on your own servers or use the CDN hosted version. It's often recommended now to put JavaScript before the end body tag `<body>` instead of the `<head>`, but Azure Media Player includes an 'HTML5 Shiv', which needs to be in the head for older IE versions to respect the video tag as a valid element.

> NOTE: If you're already using an HTML5 shiv like [Modernizr](http://modernizr.com/) you can include the Azure Media Player JavaScript anywhere, however make sure your version of Modernizr includes the shiv for video.

### CDN Version ###
    <link href="//example.com/path/to/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
    <script src="//example.com/path/to/azuremediaplayer.min.js"></script>
    <script>
      	amp.options.flashSS.swf = "//example.com/path/to/techs/StrobeMediaPlayback.2.0.swf"
      	amp.options.flashSS.plugin = "//example.com/path/to/techs/MSAdaptiveStreamingPlugin-v1.0.13-osmf2.0.swf"
      	amp.options.silverlightSS.xap = "//example.com/path/to/techs/SmoothStreamingPlayer.xap"
    </script>

### Self Hosted ###
To entirely self-host, you'll need to host the JavaScript, CSS and fallback tech files. If you simply copy the zip file contents into your project, and include everything as below (with the updated file paths), everything should just work.

    <link href="//example.com/path/to/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
    <script src="//example.com/path/to/azuremediaplayer.min.js"></script>
    <script>
    	amp.options.flashSS.swf = "//example.com/path/to/techs/StrobeMediaPlayback.2.0.swf"
      	amp.options.flashSS.plugin = "//example.com/path/to/techs/MSAdaptiveStreamingPlugin-v1.0.13-osmf2.0.swf"
      	amp.options.silverlightSS.xap = "//example.com/path/to/techs/SmoothStreamingPlayer.xap"
    </script>

## Step 2: Add an HTML5 video tag to your page. ##
With Azure Media Player you can use an HTML5 video tag to embed a video. Azure Media Player will then read the tag and make it work in all browsers, not just ones that support HTML5 video. Beyond the basic markup, Azure Media Player needs a few extra pieces.

1. The `<data-setup>` attribute on the `<video>` tells Azure Media Player to automatically set up the video when the page is ready, and read any options (in JSON format) from the attribute. 
2. The `id` attribute: Should be used and unique for every video on the same page.
3. The `class` attribute contains two classes:
	- `amp` applies styles that are required for Azure Media Player UI functionality
	- `amp-default-skin` applies the default skin to the HTML5 controls
4. The `<source>` includes two required attributes
	- `src` attribute can include a **.ism/manifest* file from Azure Media Services is added, Azure Media Player automatically adds the URLs for DASH, SMOOTH and HLS to the player 
	- `type` attribute is the required MIME type of the stream. The MIME type associated with *".ism/manifest"* is *"application/vnd.ms-sstr+xml"*
5. The *optional* `<data-setup>` attribute on the `<source>` tells Azure Media Player if there are aany unique delivery policies for the stream from Azure Media Services, including, but not limited to, encryption type (AES or PlayReady) and token. 

Include/exclude attributes, settings, sources, and tracks exactly as you would for HTML5 video.

    <video id="vid1" class="amp amp-default-skin" autoplay controls preload="auto" width="640" height="400" poster="poster.jpg" data-setup='{"techOrder": ["azureHtml5JS", "flashSS", "silverlightSS", "html5"], "nativeControlsForTouch": false}'>
    	<source src="http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest" type="application/vnd.ms-sstr+xml" />
    	<p class="vjs-no-js">
    		To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
    	</p>
    </video>

By default, the big play button is located in the upper left hand corner so it doesn't cover up the interesting parts of the poster. If you'd prefer to center the big play button, you can add an additional `amp-big-play-centered` `class` to your `<video>` element.

### Alternative Setup for Dynamically Loaded HTML ###

If your web page or application loads the video tag dynamically (ajax, appendChild, etc.), so that it may not exist when the page loads, you'll want to manually set up the player instead of relying on the data-setup attribute. To do this, first remove the data-setup attribute from the tag so there's no confusion around when the player is initialized. Next, run the following javascript some time after the Azure Media Player javascript has loaded, and after the video tag has been loaded into the DOM.

	var myPlayer = amp('vid1', { /* Options */
            techOrder: ["azureHtml5JS", "flashSS", "silverlightSS", "html5"],
            "nativeControlsForTouch": false,
            autoplay: false,
            preload: "auto",
            controls: true,
            width: "640",
            height: "400",
            poster: ""
		}, function() {
      		console.log('Good to go!');
      		this.play(); // if you don't trust autoplay for some reason
       		// add an event listener
      		this.on('ended', function() {
    			console.log('Finished!');
      	}
	);
	myPlayer.src([{ 
		src: "http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest", 
		type: "application/vnd.ms-sstr+xml"
	]);
    
The first argument in the `amp` function is the ID of your video tag. Replace it with your own.

The second argument is an options object. It allows you to set additional options like you can with the data-setup attribute.

The third argument is a 'ready' callback. Once Azure Media Player has initialized it will call this function.

Instead of using an element ID, you can also pass a reference to the element itself.

    amp(document.getElementById('example_video_1'), {/*Options*/}, function() {
    	//This is functionally the same as the previous example.
    });
    myPlayer.src([{ src: "//example/path/to/myVideo.ism/manifest", type: "application/vnd.ms-sstr+xml"]);

### Protected Content ###
Azure Media Player currently supports AES-128 bit envelope encrypted content and PlayReady protected content. In order to playback protected content correctly, you must tell Azure Media Player the `protectionInfo`. This information exists per source and can be added directly on the `<source>` tag via the `data-setup`.  You can also add the `protectionInfo` directly as a parameter if setting the source dynamically.

`protectionInfo` accepts a JSON object and includes:

- `type`: `AES` or `PlayReady`
- `authenticationToken`: this is an option field to add an unencoded authentication token

Ex:

    <video id="vid1" class="amp amp-default-skin">
    	<source 
			src="//example/path/to/myVideo.ism/manifest" 
			type="application/vnd.ms-sstr+xml" 
			data-setup='{"protectionInfo": [{"type": "AES", "authenticationToken": "Bearer=urn%3amicrosoft%3aazure%3amediaservices%3acontentkeyidentifier=8130520b-c116-45a9-824e-4a0082f3cb3c&Audience=urn%3atest&ExpiresOn=1450207516&Issuer=http%3a%2f%2ftestacs.com%2f&HMACSHA256=eV7HDgZ9msp9H9bnEPGN91sBdU7XsZ9OyB6VgFhKBAU%3d"}]}' 
		/>
    </video>
or

	var myPlayer = amp("vid1", /* Options */);
    myPlayer.src([{ 
		src: "http://clientteststreams.streaming.mediaservices.windows.net/ebd6de6b-644f-4557-84fc-1850241eca5c/ElephantDream.ism/manifest", 
		type: "application/vnd.ms-sstr+xml", 
		protectionInfo: [{ 
			type: "PlayReady", 
			authenticationToken: "Bearer=urn%3amicrosoft%3aazure%3amediaservices%3acontentkeyidentifier=d5646e95-63ee-4fbe-ba4e-295c8d9502e0&Audience=urn%3atest&ExpiresOn=1450222961&Issuer=http%3a%2f%2ftestacs.com%2f&HMACSHA256=4Jop3kNJdzVI8L5IZLgFtPdImyE%2fHTRil0x%2bEikSdPs%3d" 
		}] }, ]
	);

>**Note:** Not all browsers are capable of playing back protected content. See the section on Playback Techs for more information on what is supported

----------

# Options #

## Setting Options ##

The Azure Media Player embed code is simply an HTML5 video tag, so for many of the options you can use the standard tag attributes to set the options.

`<video controls autoplay preload="auto" ...>`

Alternatively, you can use the data-setup attribute to provide options in the [JSON](http://json.org/example.html) format. This is also how you would set options that aren't standard to the video tag.

`<video data-setup='{ "controls": true, "autoplay": false, "preload": "auto" }'...>`

Finally, if you're not using the data-setup attribute to trigger the player setup, you can pass in an object with the player options as the second argument in the javascript setup function.

`amp("vid1", { "controls": true, "autoplay": false, "preload": "auto" });`

## Individual Options ##

>**Note**: Video Tag Attributes can only be true or false (boolean), you simply include the attribute (no equals sign) to turn it on, or exclude it to turn it off. For example, to turn controls on:

>WRONG`<video controls="true" ...>`

>RIGHT`<video controls ...>`

> The biggest issue people run into is trying to set these values to false using false as the value (e.g. controls="false") which actually does the opposite and sets the value to true because the attribute is still included.

### controls ###
The controls option sets whether or not the player has controls that the user can interact with. Without controls the only way to start the video playing is with the autoplay attribute or through the API.

`<video controls ...>`
or
`{ "controls": true }`

### autoplay ###
If autoplay is true, the video will start playing as soon as page is loaded (without any interaction from the user).
>This option is not supported by mobile devices such as Windows Phone, Apple iOS and Android. Mobile devices block the autoplay functionality in an effort to protect it's customers from unwillingly using a lot of their (often expensive) monthly data plans. A user touch/click is required to start the video in this case.
`<video autoplay ...>`or `{ "autoplay": true }`

### preload ###
The preload attribute informs the browser whether or not the video data should begin downloading as soon as the video tag is loaded. The options are auto, metadata, and none.

`<video preload ...>` or `{ "preload": "auto" }`

### poster ###
The poster attribute sets the image that displays before the video begins playing. This is often a frame of the video or a custom title screen. As soon as the user clicks play the image will go away.
`<video poster="myPoster.jpg" ...>` or `{ "poster": "myPoster.jpg" }`

### width ###
The width attribute sets the display width of the video.
`<video width="640" ...>` or `{ "width": 640 }`

### height ###
The height attribute sets the display height of the video.
`<video height="480" ...>` or `{ "height": 480 }`

----------
#API#

The Azure Media Player API allows you to interact with the video through JavaScript, whether the browser is playing the video through HTML5 video, Flash, Silverlight or any other supported playback technologies.

## Referencing the Player ##
To use the API functions, you need access to the player object. Luckily this is easy to get. You just need to make sure your video tag has an ID. The example embed code has an ID of `vid1`. If you have multiple videos on one page, make sure every video tag has a unique ID.

`var myPlayer = amp('vid1');`

>Note: If the player hasn't been initialized yet via the data-setup attribute or another method, this will also initialize the player.

## Wait Until the Player is Ready ##
The time it takes Azure Media Player to set up the video and API will vary depending on the playback technology being used (HTML5 will often be much faster to load than Flash or Silverlight). For that reason, the player's 'ready' function should be used to trigger any code that requires the player's API.

    amp("vid_1").ready(function(){
      var myPlayer = this;
    
      // EXAMPLE: Start playing the video.
      myPlayer.play();
    });

## API Methods ##
Now that you have access to a ready player, you can control the video, get values, or respond to video events. The Azure Media Player API function names attempt to follow the [HTML5 media API](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html). The main difference is that getter/setter functions are used for video properties.

    // setting a property on a bare HTML5 video element
    myVideoElement.currentTime = "120";
    
    // setting a property with Azure Media Player
    myPlayer.currentTime(120);

----------

# Playback Technology ("Tech") #
Playback Technology refers to the specific browser or plugin technology used to play the video or audio. 

- **azureHtml5JS**: utilizes MSE and EME standards in conjunction with the video element for plugin-less based playback of DASH content with playback support of AES-128 bit envelope encrypted and PlayReady (when the browser support it) protected content from Azure Media Services
- **flashSS**: utilizes flash player technology to playback Smooth content with support for AES-128 bit envelope decryption from Azure Media Services
	- You must include the link to the tech in the `<head>` as seen in the setup.
- **html5**: utilizes in browser based playback technology with the video element.  When on an Apple iOS or Android device, this tech allows playback of HLS streams with some basic support for AES-128 bit envelope encryption.
- **silverlightSS**: utilizes silverlight technology to playback Smooth content with support for PlayReady protected content from Azure Media Services.
	- You must include the link to the tech in the `<head>` as seen in the setup.

##Tech Order##
In order to ensure that your asset is playable on a wide variety of devices, the following tech order is recommended: `techOrder: ["azureHtml5JS", "flashSS", "silverlightSS", "html5"]` and can be set directly on the `<video>` or programatically in the options:


    <video data-setup='{"techOrder": ["azureHtml5JS", "flashSS", "silverlightSS", "html5"]}

or 

	amp("vid1", {
      	techOrder: ["azureHtml5JS", "flashSS", "silverlightSS", "html5"]
    });

##Compatibility Matrix##
Given the recommended tech order, the following compatibility matrix is expected

<table>
    <tr>
        <td>Browser</td>
		<td>OS</td>	
		<td>Expected Tech(Clear)</td>	
		<td>Expected Tech(AES)</td>
		<td>Expected Tech (PlayReady)</td>
    </tr>
 	<tr>
        <td>IE 11</td>
		<td>Win 8.1</td>	
		<td style="background:#99FF66">azureHtml5JS</td>	
		<td style="background:#99FF66">azureHtml5JS</td>	
		<td style="background:#99FF66">azureHtml5JS</td>	
    </tr>
    <tr>
        <td>IE 8-10, IE 11</td>
		<td>Windows, Win 7</td>	
		<td style="background:#99FF66">flashSS</td>	
		<td style="background:#FFFF66">flashSS (issues)</td>
		<td style="background:#99FF66">silverlightSS</td>
    </tr>
    <tr>
        <td>Chrome 37+</td>
		<td>Win 8.1</td>	
		<td style="background:#99FF66">azureHtml5JS</td>		
		<td style="background:#99FF66">azureHtml5JS</td>	
		<td style="background:#FFFF66">silverlightSS (issues)</td>
    </tr>
    <tr>
        <td>Firefox</td>
		<td>Win 8.1</td>	
		<td style="background:#99FF66">flashSS</td>	
		<td style="background:#FFFF66">flashSS (issues)</td>
		<td style="background:#99FF66">silverlightSS</td>
    </tr>
    <tr>
        <td>Safari</td>
		<td>iOS 6+</td>	
		<td style="background:#99FF66">html5</td>	
		<td style="background:#FFFF66">html5 (no token)</td>
		<td style="background:#FF6666">none</td>
    </tr>
    <tr>
        <td>Chrome</td>
		<td>Android 4.4.4</td>	
		<td style="background:#99FF66">azureHtml5JS</td>		
		<td style="background:#99FF66">azureHtml5JS</td>
		<td style="background:#FF6666">none</td>
    </tr>
    <tr>
        <td>Chrome</td>
		<td>Android 4.0</td>		
		<td style="background:#99FF66">html5</td>	
		<td style="background:#FFFF66">html5 (no token)</td>
		<td style="background:#FF6666">none</td>
    </tr>
    <tr>
        <td>IE 11</td>
		<td>Win Phone 8.1</td>
		<td style="background:#99FF66">azureHtml5JS</td>	
		<td style="background:#99FF66">azureHtml5JS</td>	
		<td style="background:#99FF66">azureHtml5JS</td>		
    </tr>
    <tr>
        <td>Safari 8</td>
		<td>OSX Yosemite</td>
		<td style="background:#FFFF66">azureHtml5JS (issues)</td>
		<td style="background:#FFFF66">azureHtml5JS (issues)</td>
		<td style="background:#FFFF66">azureHtml5JS (issues)</td>	
    </tr>
    <tr>
        <td>Safari</td>
		<td>Below OSX Yosemite</td>
		<td style="background:#99FF66">flashSS</td>	
		<td style="background:#FFFF66">flashSS (issues)</td>
		<td style="background:#99FF66">silverlightSS</td>		
    </tr>

</table>


>**Note:** New browser technologies are emerging daily, and as such could affect this matrix.