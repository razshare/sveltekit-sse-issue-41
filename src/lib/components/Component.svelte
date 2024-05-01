<script>
  import { source } from 'sveltekit-sse';
  const time = source('/sse').select('message');
</script>

{$time}
