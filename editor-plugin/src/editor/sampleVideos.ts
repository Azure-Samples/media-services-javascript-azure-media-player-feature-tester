interface SampleVideo {
  title: string,
  url?: string,
  isCustom?: boolean;
}

export const SampleVideos: SampleVideo[] = [
  {
    title: '(VOD) Azure Media Services Overview',
    url: 'http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=mpd-time-csf)'
  },
  {
    title: '(Live) 24/7 stream',
    url: 'http://b028.wpc.azureedge.net/80B028/Samples/a38e6323-95e9-4f1f-9b38-75eba91704e4/5f2ce531-d508-49fb-8152-647eba422aec.ism/manifest(format=mpd-time-csf)'
  },
  {
    title: '(VOD) Hololens demo',
    url: 'http://nimbuspm.origin.mediaservices.windows.net/aed33834-ec2d-4788-88b5-a4505b3d032c/Microsoft%27s%20HoloLens%20Live%20Demonstration.ism/manifest(format=mpd-time-csf)'
  },
  {
    title: 'Custom URL',
    isCustom: true
  }
];
