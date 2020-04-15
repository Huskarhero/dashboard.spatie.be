<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dashboard</title>
    <link href="{{ mix("css/app.css") }}" rel="stylesheet"/>
    <script src="{{ mix("js/app.js") }}" defer></script>
    <meta name="google" value="notranslate">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <livewire:styles>
</head>
<body>
    @yield('content')
    <livewire:scripts />
</body>
</html>
