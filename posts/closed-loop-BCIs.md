---
title: 'Closed-loop brain-computer interfaces'
tags: ["review", "stimulation", "recording" ]
published: true
featuredImage: /images/neurons_array.png
date: '2020-09-27'
---

*All BCI devices record. Only a few of them provide direct feedback
to the brain in real-time. This post lists current closed-loop human BCI
devices and their applications.*

In a roundabout way, all our computers and phones are closed-loop
brain-computer interfaces. Let's narrow the focus to BCIs that
communicate 'directly' with the brain, bypassing our natural mechanisms
for input (vision, hearing, touch, taste) our output (speech,
writing/typing, or gestures).

What qualifies as a closed-loop brain-computer interface (BCI)? A
synthetic interface with the brain that records neural activity and
processes it in real time to decide when to stimulate the brain directly
or indirectly.

A system that reduces epileptic seizures by recognizing emerging
patterns in seizure foci in the brain and then responding to quell them
is a closed-loop BCI. In contrast, current Deep brain stimulation
techniques used in the treatment of Parkinson's disease are not a
closed-loop BCI. Their stimulation pattern is fixed, and the electrodes
don't record activity or respond to it.

Does a closed-loop BCI have to directly stimulate the brain through
electrodes? Not necessarily. EEG headbands that provide biofeedback for
meditation also qualify as closed-loop BCIs when they provide auditory
or visual feedback that responds in real time to brain activity.

A closed-loop BCI by definition is a device that reads from the brain,
rather than other parts of the nervous system. Biofeedback from heart
rate or breathing rate, reading from EMG or other peripheral nerves,
therefore, does not qualify as a closed-loop BCI.

Some of the [best-funded
players](https://from-the-interface.com/BCI-venture-funding/) in BCI
don't seem to be reaching for closed-loop BCI, at least initially.
Neuralink, Paradromics, Kernel, and Neurable have all focused their
prototypes and papers on recording from the brain and interpreting the
information rather than on closing the loop.

But several players do have closed-loop BCI as their
goal. They aim to augment meditation, sleep, memory, and even to treat
epilepsy. This post lists current human closed-loop BCIs, with a focus
on devices that are or should soon be commercially available.

##Meditation

The [MUSE](https://choosemuse.com/) headband is the classic example of a
closed-loop meditation BCI application. The 'Brain Sensing headband that
Improves your Meditation Practice' translates brainwaves into
soundscapes that allow the user to monitor their brain activity while
meditating. If the user hears stormy sounds, they can calm their brain
rhythms until they start to hear more peaceful sounds and 'reward
chirps'. The MUSE uses 4 EEG sensors incorporated into a headband that
goes across the forehead and behind the ears.

As far as non-invasive BCI goes, the Muse seems to be the perfect
example of a product that is useful to people right now. The headband has [mixed
reviews](https://www.mentalfloss.com/article/611009/muse-meditation-headband-review),
with some users complaining that the effectiveness of the feedback
depends heavily on your state during the calibration session. The newer
version seems to rely a lot more on other sensors (Photoplethysmography
(PPG) sensor, pulse oximeter, accelerometer, and gyroscope) than the EEG
to provide biofeedback.

Other comparable products like the lower-priced
'[Flowtime](https://www.amazon.com/Flowtime-Biosensing-Meditation-Brainwave-Mindfulness/dp/B0824L385C/ref=sr_1_4?dchild=1&keywords=emotiv&qid=1600645992&sr=8-4)'
are also available for purchase.

##Sleep

While the MUSE offers some sleep features, the [Dreem
2](https://dreem.com/), billed as your 'personal sleep assistant' makes
a sleep profile for viewing in the morning and coaches the user on how
to sleep better. The 6-electrode headband is tailored towards long-term
sleep monitoring rather than any real-time feedback that enhances sleep.

The audio on the headset, delivered through bone conduction,
automatically lowers and switches off if the user's EEG signals indicate
that they have fallen asleep. The EEG-based sleep detection capability also
determines when to set an alarm to wake the user. With these 2 features,
the Dreem 2 just about makes it into closed-loop BCI territory.

##Attention

There does not appear to be a device that focuses on enhancing attention
through BCI. The closest device is the Emotiv, whose website says 'The
EMOTIV MN8 helps to measure and analyze the changes in your employees'
levels of stress and attention using EEG and EMOTIV's proprietary
machine learning algorithms'. The app that accompanies the device
presumably displays stress and attention levels across the day or during
activities. It is not clear how (or if) the feedback is used to guide or
nudge workers.

The gaming industry does appear to have invested in reasearch into closed-loop
BCIs that respond to attention-like cues gathered directly from EEG.
Valve's

[experimental
psychologist describes](https://www.youtube.com/watch?v=gvjzPUtD2WY)
using signals from BCI to engage the player for longer, responding to
signs of stress, tiredness, or boredom by changing the level of
difficulty of the game. Smaller developers like
[Brainattach](http://brainattach.com/) have also experimented in this direction.

##Memory

In 2018 a closed-loop invasive device showed in human trials that
hippocampal recording and stimulation could boost recall. The
'[hippocampal memory
prosthetic'](•%09https:/www.wired.com/story/hippocampal-neural-prosthetic)
facilitates encoding using the subject\'s own hippocampal spatiotemporal
neural codes for memory. When tested across 8 subjects, there was
significant improvement (35%) in both short-term and long-term retention
of visual information. The technology was picked up by Kernel (with its
developers), and the research was furthered there, but the prosthetic
was since shelved. Kernel has moved into non-invasive neural interfaces
that read from the brain and decode signals, with no stimulating
capabilities.

Meanwhile, [Nia Therapeutics](https://niatherapeutics.com/) is
developing and commercializing an ECoG-based 'memory augmenting'
closed-loop system that senses from the temporal lobe. The device uses
electrodes that record the state of the subject's brain, analyze it,
and decide whether to trigger stimulation. A
[study](https://www.nature.com/articles/s41467-017-02753-0) of a
prototype version showed a small improvement in subjects' ability to
remember words, using a machine learning algorithm to close the loop.
Now, coupled with a Cortera Technologies' [wireless neuromodulation
device](https://www.nature.com/articles/s41551-018-0323-x) Nia
Therapeutics is building the prototype to clinical functionality,
focusing first on a device targeted at patients with traumatic brain
injury.

##Epilepsy

[Neuropace](https://www.neuropace.com/)'s neurostimulation system for
epilepsy treatment is the only invasive FDA-cleared closed-loop BCI.
Depending on the location of the epileptic focus in the brain, a surgeon
places deep and/or surface leads that sense patterns that are likely to
lead to a seizure, and automatically deliver pre-programmed stimulation
pulses to prevent it. Their
[study](https://www.businesswire.com/news/home/20200727005116/en/New-Published-Data-Show-NeuroPace’s-RNS®-System-Provides-Patients-with-Unprecedented-Seizure-Reduction-and-Improved-Quality-of-Life),
completed in 2020 showed that 30% of patients achieved more than 90%
seizure reduction in the most recent 3 months. There are no numbers
available on how many patients are currently using the device, but the
company recently received a second FDA approval and raised funding to
[support commercial
expansion](https://www.businesswire.com/news/home/20200831005199/en/NeuroPace-Raises-67-Million-Financing-to-Support-Commercial-Expansion-of-the-RNS®-System-for-Refractory-Epilepsy).

---

The experimental invasive hippocampal and temporal lobe BCIs seem very
far from the everyday usability of the sleep-monitoring and
meditation-enhancing headbands. What they all have in common is that
they interpret the language of our neurons and allow us new ways to talk
back to them -— without having to learn their language first.
